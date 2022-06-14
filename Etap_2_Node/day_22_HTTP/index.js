// const http = require('http');
const {createServer} = require('http');

// // Tworzenie serwera wraz z callback jesli ktos sie podlaczy
// createServer((request, response) => {
//
//     response.writeHead(200, {
//         'content-type': 'text/html',
//     });
//     response.end('<h1>Hello from MegaK</h1>');
//
// }).listen(3000, '127.0.0.1');


// Inny sposob
const server = createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html',
    });
    res.end('<h1>Hello from MegaK</h1>');
});

server.listen(3000, 'localhost');