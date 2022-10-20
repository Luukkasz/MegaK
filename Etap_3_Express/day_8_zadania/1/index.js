const express = require('express');
const {voteRouter} = require("./routes/vote");

const app = express();
const port = 3033;

app.use(express.json());
app.use(express.static('public'));

app.use('/vote', voteRouter);

app.listen(port, 'localhost');
