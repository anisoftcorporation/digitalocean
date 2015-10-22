var http = require('http');

http.createServer(function (req, res) {
	 console.log("New Conn");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('More Interesting Stuffs to Appear');
}).listen(9090,'0.0.0.0');
console.log('Server running at http://104.236.240.241:9090/'); 