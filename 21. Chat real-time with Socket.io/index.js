const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path')
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat name', function(name){
    console.log(name);
    io.emit('chat name', name);
  });
  socket.on('chat message', function(message){
    console.log("Message: " + message);
    io.emit('chat message', message);
  });
});

http.listen(port, function(){
  console.log(`listening on *:${port}`);
});
