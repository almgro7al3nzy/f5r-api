const express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const general = io.of("/general");
const football = io.of("/football");
const basketball = io.of("/basketball");
const abbas = io.of("/abbas");
var people = {};


app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));


let numUsers = 0;


general.on('connection', function (socket) {

    nickname = socket.handshake.query['nickname'];
    people[socket.id] = nickname;

    socket.on('join', function(msg){
        footballTotalUser = numUsers + 1;
        console.log(nickname + ": has joined to general channel");
        console.log("channel user count:" + numUsers);
        socket.broadcast.emit('join', {nickname: nickname, count: numUsers});
        socket.emit('activeUser', {count: numUsers});
    });

    socket.on('disconnect', function(msg){
        numUsers = numUsers - 1;
        console.log( people[socket.id] + ": has left to general channel");
        console.log("channel user count:" + generalTotalUser);
        socket.broadcast.emit('left', {nickname:  people[socket.id], count: generalTotalUser});
    });

    socket.on('new_message', function(msg){
        console.log(msg.nickname + " has send message: " + msg.message);
        socket.broadcast.emit('new_message', {nickname: msg.nickname, message: msg.message});
    });
});

io.on('connection', (socket) => {
    let addedUser = false;

    // when the client emits 'new message', this listens and executes
    socket.on('new message', (data) => {
        // we tell the client to execute 'new message'
        socket.broadcast.emit('new message', {
          username: socket.username,
          message: data
        });
    });
    //console.log(socket.id, "a user connected to server!");

    // when the client emits 'add user', this listens and executes
    socket.on('add user', (username) => {
        if (addedUser) return;

        // we store the username in the socket session for this client
        socket.username = username;
        ++numUsers;
        addedUser = true;
        socket.emit('login', {
          numUsers: numUsers
        });
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
          username: socket.username,
          numUsers: numUsers
        });
    });

    // when the client emits 'typing', we broadcast it to others
      socket.on('typing', () => {
        socket.broadcast.emit('typing', {
          username: socket.username
        });
      });

      // when the client emits 'stop typing', we broadcast it to others
      socket.on('stop typing', () => {
        socket.broadcast.emit('stop typing', {
          username: socket.username
        });
      });

    socket.on('disconnect', function () {
        if (addedUser){
            --numUsers;

            // echo globally that this client has left
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    });
});

server.listen(app.get('port'), function(){
    console.log("Server is now running...");
    console.log("Port is on", app.get('port'))
});