var chocolate_pony_http = require('http');
var chocolate_pony_file_system = require('fs');

var chocolate_pony_server = chocolate_pony_http.createServer(handleRequest);

function handleRequest(request, response) {
    console.log('Were ponies hit?', request.url);
    chocolate_pony_file_system.readFile('./document_root/index.html', function (err, data) {
        if (err) throw err;
        response.end(data);
        console.log(data);
    });

    //console.log('Were ponies hit?', request.url);
    //response.end('Victory! Ponies hit!' + request.url);
}

chocolate_pony_server.listen(8888, function() {
    console.log('Server Listening');
});