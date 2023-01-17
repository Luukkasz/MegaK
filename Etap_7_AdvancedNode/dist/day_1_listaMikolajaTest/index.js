"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./utils/db");
require("express-async-errors");
const express = require("express");
const methodOverride = require("method-override");
const error_1 = require("./utils/error");
const home_1 = require("./routers/home");
const child_1 = require("./routers/child");
const gift_1 = require("./routers/gift");
const hbs = require("express-handlebars");
const handlebars_helpers_1 = require("./utils/handlebars-helpers");
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
    helpers: handlebars_helpers_1.handlebarsHelpers, // dodatkowe funkcjonalnosci, ktore chcemy dodac do Handlebarsow
}));
app.set('view engine', '.hbs');
app.use('/', home_1.homeRouter);
app.use('/child', child_1.childRouter);
app.use('/gift', gift_1.giftRouter);
app.use(error_1.handleError);
app.listen(3002, 'localhost', () => {
    console.log('Program działa na adresie http://localhost:3002');
});
//# sourceMappingURL=index.js.map