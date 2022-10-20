const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3033;


app.use(express.json());
app.use(express.static('public'))
app.use(cookieParser());


app.get('/book', (req, res) => {
    console.log(req.cookies);

    res.send('Ok.');
})

app.listen(port);