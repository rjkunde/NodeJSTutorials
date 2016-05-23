// Include http & mysql module 
var http = require('http'), 
mysql = require("mysql"); 
                 
// Create the connection. 
// Data is default to new mysql installation and should be changed according to your configuration. 
var connection = mysql.createConnection({ 
	user: "root", 
    password: "YOUR_ROOT_PASSWORD_HERE", 
    database: "YOUR_DATABASE_HERE"
});
// Create the server
http.createServer(function (request, response) {
	request.on('end', function () {
		console.log('request end event fired');   
     });       
     // Query the database. 
     connection.query('SELECT * FROM YOUR_TABLE_HERE;', function (error, rows, fields) { 
		 response.writeHead(200, { 
			'Content-Type': 'x-application/json' 
		  }); 
		 // Send data as JSON string. 
		 // Rows variable holds the result of the query. 
		 response.end(JSON.stringify(rows)); 
		 console.log('response end call done');
     });            
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
