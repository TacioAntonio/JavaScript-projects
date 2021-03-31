const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
log = console.log;
chalk = require('chalk');
const express = require('express');
const app = express();
const port = 3000;
const message = _ => { log(chalk.green(`[online] Server online in http://localhost:${port}.`)); };
const router = require('./router');

app.use(express.static('src/views'));
app.use('/', router);

app.listen(port, message());