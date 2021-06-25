const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/login.html'));
});

app.post('/', function (req, res) {});

app.listen(8080, '127.0.0.1', function () {
  console.log(`Servidor iniciado na porta: ${8080} em localhost`);
});
