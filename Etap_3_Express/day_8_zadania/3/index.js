const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const {cookieRouter} = require("./routes/cookie");

console.log('Running my app...')

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
// Pomaga rozszyfrowac Content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true,
}));
app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use('/cookie', cookieRouter);
app.get('/hi', (req,res) => {
    res.render('home');
})

app.listen(3033, 'localhost');
