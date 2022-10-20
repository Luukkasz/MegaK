const express = require('express');
const app = express();

app.get('/', (req,res) => {
    console.log(req.headers["user-agent"]);

    // res.send('Hello World from backend!');

    res.send(`Hello, ${req.headers["user-agent"]}`)
})

app.listen(3033);


//
// const {createServer} = require('http');
//
// createServer((req,res)=>{
//     res.writeHead(200, {
//         'Content-type': 'text/html',
//     });
//     res.end(`Hello, ${req.headers["user-agent"]}`);
// }).listen(3033);