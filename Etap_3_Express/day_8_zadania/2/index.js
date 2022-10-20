const express = require('express');
const {calcRouter} = require("./routes/calc");

console.log('Running my app...')

const app = express();
const port = 3033;

app.use(express.json());
app.use(express.static('public'));

app.use('/calc', calcRouter);

app.listen(port, 'localhost');
