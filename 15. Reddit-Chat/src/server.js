log = console.log;
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;
const message = _ => { log('Server online.'); }
const router = require('./router');

app.use(express.static(__dirname+'/views'));
app.use(router);

io.on('connect', socket => {
    let members = socket.server.engine.clientsCount;

    function membersOnline() {
        socket.emit('members', members)
        socket.broadcast.emit('members', members)
    }

    socket.on('message', message => {
        socket.emit('myDialog', {
            user: socket.id,
            message
        }) 
        // Para vc a direita
        socket.broadcast.emit('dialog', {
            user: socket.id,
            message
        })
        // Para outra pessoa a esquerda
    });

    socket.emit('usersId', socket.id)
    socket.broadcast.emit('users', socket.id)

    membersOnline();
    
    socket.on('disconnect', _ => {
        members -= 1;
        membersOnline()
    })
})

http.listen(port, message);
