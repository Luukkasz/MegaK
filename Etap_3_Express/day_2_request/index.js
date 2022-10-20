const express = require('express');

const app = express();

const allowedIps = ['localhost', '127.0.0.1', '::1', '::ffff:127.0.0.1'];

function generateQueryString(params) {
    const qs = new URLSearchParams(params);
    return `${qs}`.replace(/\+/g, '%20');
}

console.log(`http://localhost:3033/?${generateQueryString({
    name: 'Barek & Kuba?',
})}`)

// Nasluchiwanie na wszystkie metody
app.all('/', (req, res) => {

    // req.ip = Adres IP klienta

    // req.query =
    console.log(req.query);

})


// Nasłuchiwanie na konkretny port
app.listen(3033);