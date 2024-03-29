import express, {Router} from "express"
import cors from 'cors'
import 'express-async-errors'
import {handleError, ValidationError} from "./utils/erros";
import { rateLimit } from 'express-rate-limit'
import {adRouter} from "./routers/ad.router";
import {config} from "./config/config";

const app = express();

app.use(cors({
    origin: config.corsOrigin,
}));
app.use(express.json())
app.use(rateLimit({
    windowMs: 5 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
}))

const router = Router()

router.use('/ad', adRouter)

app.use('/api', router)

app.get('/', async (req,res) => {
    res.send('Działamy' )
})

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001')
})