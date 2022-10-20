const express = require('express');
const rateLimit = require('express-rate-limit');
const {nameRouter} = require("./routes/name");

const app = express();
const port = 3033;

// Ograniczenie do 10 zapytan na minute
const limiter = rateLimit({
    windowMs:  60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})

app.use(limiter);
app.use(express.json());

app.use('/name', nameRouter);

app.listen(port, 'localhost');
