var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	console.log("Here");
  res.send('Welcome');
  console.log(__dirname);
});
app.get('/chat', function(req, res){
  res.sendFile(__dirname+'/'+'chat.html');
});
io.on('connection', function(socket){
//socket.emit("welcome",{'data':'hello'});
console.log('a user connected');
});

http.listen(80, function(){
  console.log('listening on *:80');
});