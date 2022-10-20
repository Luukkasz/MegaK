const express = require('express');
const {join} = require('path');

const app = express();
const port = 3033;

app.get('/', (req, res) => {
    // res.sendFile(join(__dirname, 'test.txt'))

    // res.sendFile('test.txt', {
    //     root: join(__dirname, 'files'),
    //     headers: {
    //         'X-Best-JS-Information': 'Lukasz'
    //     },
    // })

    res.attachment('test.txt', {
        root: join(__dirname, 'files'),
    })
    res.end();

    })

app.listen(port);