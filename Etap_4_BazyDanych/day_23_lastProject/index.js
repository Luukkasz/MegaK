const express = require('express');
const methodOverride = require('method-override');
const { handleError } = require("./utils/error");
const { homeRouter } = require("./routers/home");
const { childRouter } = require("./routers/child");
const { giftRouter } = require("./routers/gift");
const hbs = require('express-handlebars');


const app = express();

// Middleware
app.use(methodOverride('_method'));
// Do obslugi formularzy
app.use(express.urlencoded({
    extended: true,
}));
// Wskazujemy ze uzywamy plikow statycznych z folderu public
app.use(express.static('public'));
// Parsowanie danych ktore przychodza w JSON
app.use(express.json()); //Content-type: application/json
app.engine('.hbs', hbs.engine({
    extname: '.hbs',
    helpers: 'handlebarsHelpers', // dodatkowe funkcjonalnosci, ktore chcemy dodac do Handlebarsow
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/child', childRouter)
app.use('/gift', giftRouter)
app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Program działa na adresie http://localhost:3000');
})