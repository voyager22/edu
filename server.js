var http = require("http");
var url = require("url");
/*
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
*/


function start(route){
	function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log('pathname='+pathname+ ' received');
	route(pathname);
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log('Server Started!!!')
}
/*add new comments*/
exports.start=start;