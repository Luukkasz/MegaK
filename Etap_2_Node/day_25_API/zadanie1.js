const {createServer} = require('http');
const {readFile, writeFile} = require('fs').promises;

const server = createServer();


server.on('request', async (req, res) => {

    if (req.url === '/') {

        let counter = await readFile('./zadanie1Counter.js', 'utf-8');
        counter++;
        await writeFile('./zadanie1Counter.js', counter + '', 'utf8');

        res.writeHead(200, {
            'Content-type': 'text/html',
        });
        res.write(`<h1>Wszedles na te strone ${counter} razy.</h1>`);
        res.end();

    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
        });
        res.write(`Not found`);
        res.end();
    }

});


server.listen(3000, 'localhost');