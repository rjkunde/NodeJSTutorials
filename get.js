// Include http & url modules
var http = require('http'),
url = require("url"); 

// Create the server
http.createServer(function (request, response) {
	request.on('end', function () {
	console.log('request on event fired');	
	});
	var _get = url.parse(request.url, true).query;	
	
	// Write headers to the response.
	// 200 is HTTP status code (this one means success)
	// Second parameter holds header fields in object
	// We are sending plain text, so Content-Type should be text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	// Send data and end response. 
	response.end('Here is your data: ' + _get['data']); 
	console.log('response end call done');
	
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');