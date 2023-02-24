import express from "express"
import cors from 'cors'
import 'express-async-errors'
import {handleError, ValidationError} from "./utils/erros";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json())

// Routes....

app.get('/', async (req,res) => {
    res.send('Działamy' )
})

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001')
})