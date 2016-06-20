var http = require("http");

http.createServer(function(request, response) {
    if (request.method == 'POST') {

        request.on('data', function(chunk) {
            console.log("Received body data:");
            console.log(chunk.toString());
        });

        request.on('end', function() {
            // empty 200 OK response for now
            response.writeHead(200, {
                "Content-Type": "text/plain",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            });
            response.end();
        });

    } else {
        console.log("[405] " + request.method + " to " + request.url);
        response.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
        response.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
    }
    response.end();
}).listen(8888);

