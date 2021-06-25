const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.get('/', function (req, res) {
  res.render('login.html');
});

app.post('/', function (req, res) {});

app.listen(8080, '127.0.0.1', function () {
  console.log(`Servidor iniciado na porta: ${8080} em localhost`);
});
