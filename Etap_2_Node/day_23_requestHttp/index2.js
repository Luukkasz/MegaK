const {createServer} = require('http');
const {readFile} = require('fs').promises;

// Tworzymy serwer
const server = createServer();

// Dzieki async kod jest asynchroniczny wiec serwer jest odporny na wiele requestow na raz
server.on('request', async (req, res) => {

    const htmlFile = await readFile('./index.html', 'utf8');
    res.writeHead(200, {
        'Content-type': 'text/html',
    });
    res.end(htmlFile);
});

// Podajemy gdzie nasluchujemy
server.listen(3000, 'localhost');