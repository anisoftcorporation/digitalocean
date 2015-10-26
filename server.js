var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/chat', function (req, res) {
  res.send('Chat!');
});
app.get('/login', function (req, res) {
  res.send('Login!');
});
var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
