import cors from 'cors';
import express from 'express';
import SocketIO from 'socket.io';
import http from 'http';
import { userAuthRouter } from './routers/userRouter';
import { timeLogRouter } from './routers/timeLogRouter';
import { errorMiddleware } from './middlewares/errorMiddleware';
import { userDailySheetRouter } from './routers/userDailySheetRouter';
import { userStudyRoomsRouter } from './routers/userStudyRoomsRouter';
import { commentsRouter } from './routers/commentsRouter';
import { applicantsRouter } from './routers/applicantsRouter';
import { totalTimeRouter } from './routers/totalTimeRouter';
import { userStudyRoomsService } from './services/userStudyRoomsService';
// import fs from 'fs';

const app = express();

// CORS 에러 방지
app.use(cors());

// express 기본 제공 middleware
// express.json(): POST 등의 요청과 함께 오는 json형태의 데이터를 인식하고 핸들링할 수 있게 함.
// express.urlencoded: 주로 Form submit 에 의해 만들어지는 URL-Encoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 기본 페이지
app.get('/', (req, res) => {
    res.send('안녕하세요, 레이서 프로젝트 API 입니다.');
});

// router, service 구현 (userAuthRouter는 맨 위에 있어야 함.)
app.use('/api', userAuthRouter);
app.use('/api',timeLogRouter);
app.use('/api',userDailySheetRouter);
app.use('/api',userStudyRoomsRouter);
app.use('/api',commentsRouter);
app.use('/api',applicantsRouter);
app.use('/api',totalTimeRouter);

// 순서 중요 (router 에서 next() 시 아래의 에러 핸들링  middleware로 전달됨)
app.use(errorMiddleware);

// const options = {
//     key: fs.readFileSync(__dirname + '/privkey.pem'),
//     cert: fs.readFileSync(__dirname + '/cert.pem')
// };

const httpServer = http.createServer(app);

const wsServer = SocketIO(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        method: ['GET', 'POST'],
        allowedHeaders: ['checkMyService'],
        credentials: true,
    }
});

const roomList = {};

function isUserInRoom(obj, roomId, userId) {
    let check = false;
    obj[roomId].forEach((data) => {
        if(data.userId === userId) {
            check = data;
        }
    });
   
    return check;
}

function isEmptyObj(obj)  {
    if(obj?.constructor === Object
        && Object.keys(obj).length === 0)  {
        return true;
    }        
    
    return false;
}

function deleteUserInRoom(obj, userId) {
    let findUser = null;
    let roomId;
    let index;
    Object.keys(obj).forEach((v, i) => {
        roomList[v].forEach((data, i) => {
            if (data.userId === userId) {
                findUser = data
                roomId = v;
                index = i;
                return false;
            }
        })
    })
    
    if (findUser != null) {
        roomList[roomId]?.splice(index, 1);
        return true;
    }
}

wsServer.on("connection", (socket) => {
    socket.on("enter_room", async (roomId, newUserId, userId, userName, done) => {

        console.log("enter_room");
        console.log("roomId : ", roomId);
        console.log("username : ", userName);
        console.log("userId : ", userId);
        let getInfo = {};
        getInfo = await userStudyRoomsService.getRoom({roomId}); // 이부분이 아직임.
        console.log("roomInfo : ", getInfo);
        if (isEmptyObj(getInfo) == false) {
            if (!roomList[roomId]) {
                roomList[roomId] = [];
            }
        }
        else {
            const errorMessage = "요청하신 스터디룸은 없습니다."
            socket.emit("refuse", errorMessage);
            return;
        }
        
        roomList[roomId].push({
            "userName" : userName,
            "socketId" : newUserId,
            "userId" : userId
        });

        socket.join(roomId);
        // done();
        socket.to(roomId).emit("welcome", userId, userName, newUserId); // 방에 접속하는 모든 사람에게 인사
    });

    socket.on('offer', (offer, newUserId, offersId) => {
        console.log("userSocketId : ", newUserId);
        console.log("send Offer : ", offer);
        socket.to(newUserId).emit('offer', offer, offersId);
    });
    socket.on('answer', (answer, newUserId, offersId) => {
        console.log("userSocketId : ", newUserId);
        console.log("send answer : ", answer);
        socket.to(offersId).emit('answer', answer, newUserId);
    });
    socket.on('ice', (ice, othersId, myId) => {
        // 다른 사람에게 나의 icecandidate 전달
        socket.to(othersId).emit('ice', ice, myId);
        console.log(`send ${othersId} ice candidate`, ice);
    });

    socket.on("disconnecting", async () => {
        
        let findUser = null;
        let roomId;
        let index;

        Object.keys(roomList).forEach((v, i) => {
            roomList[v].forEach((data, i) => {
                if (data.socketId === socket.id) {
                    findUser = data
                    roomId = v;
                    index = i;
                    return false;
                }
            })
        })
        
        // 새로고침하면 나갔다가 다시 들어감.
        console.log(`disconnect user's socketId : `, socket.id)
        socket.to(roomId).emit("bye", socket.id, findUser?.userName);
        // 룸 리스트 내 제거
        roomList[roomId]?.splice(index, 1);
        console.log(`rooms : `, roomList);
        console.log(`socket rooms : `, socket.rooms);
    })

    socket.on("disconnect", (reason) => {
        console.log(`disconnect ${socket.id} due to ${reason}`);
        console.log(`after rooms : `, socket.rooms);
    });
})


export { httpServer, wsServer };