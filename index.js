const express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const general = io.of("/general");
var people = {};

var basketballTotalUser = 0;

general.on('connection', function (socket) {

    nickname = socket.handshake.query['nickname'];
    people[socket.id] = nickname;

    socket.on('join', function(msg){
        footballTotalUser = generalTotalUser + 1;
        console.log(nickname + ": has joined to general channel");
        console.log("channel user count:" + generalTotalUser);
        socket.broadcast.emit('join', {nickname: nickname, count: generalTotalUser});
        socket.emit('activeUser', {count: generalTotalUser});
    });

    socket.on('disconnect', function(msg){
        generalTotalUser = generalTotalUser - 1;
        console.log( people[socket.id] + ": has left to general channel");
        console.log("channel user count:" + generalTotalUser);
        socket.broadcast.emit('left', {nickname:  people[socket.id], count: generalTotalUser});
    });

    socket.on('new_message', function(msg){
        console.log(msg.nickname + " has send message: " + msg.message);
        socket.broadcast.emit('new_message', {nickname: msg.nickname, message: msg.message});
    });
});


const PORT = process.env.PORT || 5000; 
server.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`); 
});