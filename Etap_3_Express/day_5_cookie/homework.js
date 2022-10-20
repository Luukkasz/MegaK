const express = require('express');
const {readFile, writeFile} = require('fs').promises;
const app = express();
const port = 3033;


// app.get('/:liczba1?/:liczba2?', (req,res) => {
//     const num1 = Number(req.params.liczba1);
//     const num2 = Number(req.params.liczba2);
//
//     const sum = num1+num2;
//
//     res.send(`Twój wynik to: ${sum}`);
// })


app.get('/name/set/:name', async (req, res) => {
    name = req.params.name;
    await writeFile('name.txt', name, 'utf8')
    res.send(name);
})

app.get('/name/show', async (req, res) => {
    const name = await readFile('name.txt', 'utf8')
    res.send(name);
})

app.get('/name/check', async (req, res) => {
    try {
        await readFile('name.txt');
        res.send('True')
    } catch (e) {
        res.send('There is no name!')
    }
})


app.listen(port);