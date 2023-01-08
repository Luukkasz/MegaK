import './utils/db';
import 'express-async-errors';
import * as express from "express";
import * as cors from 'cors';
import {handleError} from "./utils/error";
import {homeRouter} from "./routers/home";
import {childRouter} from "./routers/child";
import {giftRouter} from "./routers/gift";



const app = express();

// Middleware
// app.use(methodOverride('_method'));
// Do obslugi formularzy
// app.use(express.urlencoded({
//     extended: true,
// }));

// Wskazujemy ze uzywamy plikow statycznych z folderu public
// app.use(express.static('public'));
// Parsowanie danych ktore przychodza w JSON

// app.engine('.hbs', hbs.engine({
//     extname: '.hbs',
//     helpers: handlebarsHelpers, // dodatkowe funkcjonalnosci, ktore chcemy dodac do Handlebarsow
// }));
// app.set('view engine', '.hbs');

app.use(cors({
    origin: "http://localhost:3000",
}))
app.use(express.json()); //Content-type: application/json
app.use('/', homeRouter);
app.use('/child', childRouter)
app.use('/gift', giftRouter)
app.use(handleError);


app.listen(3002, 'localhost', () => {
    console.log('Program działa na adresie http://localhost:3002');
})