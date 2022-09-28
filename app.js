var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const general = io.of("/general");
var people = {};

var generalTotalUser = 0;
var footballTotalUser = 0;
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

http.listen(3000, function () {
    console.log('listening on *:3000');
});