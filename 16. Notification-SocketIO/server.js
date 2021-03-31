const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const log = console.log;
const port = 3000;
const message = _ => { log(`Server online at http:localhost:${port}`); }

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    return res.sendFile(`${__dirname}/view/index.html`);
})

io.on('connection', socket => {
    socket.on('notification', message => {
        socket.broadcast.emit('getNotification', message);
    })
})

http.listen(port, message);