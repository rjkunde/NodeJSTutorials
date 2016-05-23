// Include http & fs modules,
var http = require("http"),
fs = require("fs");

// Create the server
http.createServer(function (request, response) {
	request.on('end', function () {
	console.log('request on event fired');	
	});
	if (request.url == '/') {
		// Read the file.
		fs.readFile("test.txt", 'utf-8', function (error, data) {
		// Write headers.
		response.writeHead(200, {
					'Content-Type': 'text/plain'
		});
		// Increment the number obtained from file.
		data = parseInt(data) + 1;
		// Write incremented number to file.
		fs.writeFile('test.txt', data);
		// End response with some nice message.
		response.end('This page was refreshed ' + data + ' times!');
		console.log('response end call done');
		});
	} else {
		// Indicate that requested file was not found.
	   response.writeHead(404);
		// And end request without sending any data.
	  response.end();
		
	}
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');