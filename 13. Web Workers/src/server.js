const express = require('express');
const app = express();
const log = console.log;
const port = 3000;
const message = _ => { log('Server online.'); }
const path = require('path');

app.use(express.static(path.join(__dirname, '/view/')))

app.get('/', (req, res) => {
    return res.sendFile(__dirname+'/view/index.html')
})

app.listen(port, message)