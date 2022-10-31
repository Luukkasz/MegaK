import * as express from "express";
import 'express_async_errors'
import * as methodOverride from "method-override";
import {handleError} from "./utils/error";
import {homeRouter} from "./routers/home";
import {childRouter} from "./routers/child";
import {giftRouter} from "./routers/gift";
import * as hbs from "express-handlebars";
import 'utils'
import {handlebarsHelpers} from "./utils/handlebars-helpers";


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
    helpers: handlebarsHelpers, // dodatkowe funkcjonalnosci, ktore chcemy dodac do Handlebarsow
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/child', childRouter)
app.use('/gift', giftRouter)
app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Program działa na adresie http://localhost:3000');
})