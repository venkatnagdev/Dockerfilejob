// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! \n");
});

// listen on localhost:8000
server.listen(8002);
console.log("Server listening on port 8002 :  http://18.234.190.162:8002/");
