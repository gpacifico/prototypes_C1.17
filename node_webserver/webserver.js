var chocolate_pony_http = require('http');
var chocolate_pony_file_system = require('fs');

var chocolate_pony_server = chocolate_pony_http.createServer(handleRequest);

function handleRequest(request, response) {
    console.log('Were ponies hit?', request.url);
    var chocolate_pony_url = request.url;
    if (chocolate_pony_url === '/') {
        chocolate_pony_url = '/index.html';
    }
    chocolate_pony_file_system.readFile('./document_root' + chocolate_pony_url, function (err, data) {
        if (err) {
            chocolate_pony_url = '/404.html';
            chocolate_pony_file_system.readFile('./document_root' + chocolate_pony_url, function (err, data) {
                response.writeHead(404, {
                    'Content-Type': 'text/html',
                    'Gwen_likes': 'chocolate'
                });
                response.end(data);
            })
        }
        else {
            response.writeHead(200, {
                'Content-Type': 'text/html',
                'Gwen_likes': 'ponies'
            });
            response.end(data);
        }
        // response.end(data);
        // console.log(data);

    });

    //console.log('Were ponies hit?', request.url);
    //response.end('Victory! Ponies hit!' + request.url);
}

chocolate_pony_server.listen(8888, function() {
    console.log('Server Listening');
});