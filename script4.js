var server=require('http');

server.createServer(engine).listen(1337);

function engine (request,response) {
	// body...
	response.writeHead(200,{'Content-type':'text/plain'});
	response.end('Hey there form server');
	
}