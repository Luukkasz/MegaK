const {createServer} = require('http');
const server = createServer();

// Request zawiera:
// - wersje protokolu,
// - req.method - nazwe metody (domyslnie GET),
// - req.url - sciezke URL (bez portu i hosta),
// - req.headers - obiekt nazwa-wartosc.


server.on('request', (req, res) => {
    if (req.url === '/' && req.method === 'GET'){
        res.writeHead(200, {
            'Content-type': 'text/html',
        });
        res.end('<h1>Hello from MegaK</h1>');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
        });
        res.end('<h1>Not Found!</h1>');
    }
});

server.listen(3000, 'localhost');