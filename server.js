var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('More Interesting Stuffs to Appear');
}).listen(8080, "104.236.240.241");
console.log('Server running at http://104.236.240.241:8080/');