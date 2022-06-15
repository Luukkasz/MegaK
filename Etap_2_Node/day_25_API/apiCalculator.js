const {createServer} = require('http');
const server = createServer();

// Kalkulator
const calc = (operation, num1, num2) => {
    switch (operation) {
        case 'add':
            return Number(num1) + Number(num2);
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            return 'Operation is not supported!'
    }
};

// Nasluchiwanie na request
server.on('request', (req, res) => {

    const [, operation, num1, num2] = req.url.split('/');
    const result = calc(operation, num1, num2);

    // Odpowiedz naszego serwera
    if (operation === 'add' || operation === 'subtract' || operation === 'multiply' || operation === 'divide') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end(`<h1> Result: ${result}`)
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });
        res.end('<h1>Operation is not supported! </h1>')
    }
});

server.listen(3000, 'localhost');