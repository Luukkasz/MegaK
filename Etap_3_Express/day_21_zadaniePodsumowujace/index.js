const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const {clientRouter} = require("./routers/client");
const {homeRouter} = require("./routers/home");
const {db} = require('./utils/db');
const {handleError} = require('./utils/errors')

const app = express();

app.use(methodOverride('_method'));
// Pozwala odbierac dane z zwyklego formularza w html
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use(express.json());
app.engine('.hbs', hbs.engine({
    extname: '.hbs',
    // helpers: 'handlebarsHelpers'
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);


// Middleware dla bledow musi byc ostatni
app.use(handleError);

app.listen(3033, () => {
    console.log('Program działa na porcie http://localhost:3033');
});

