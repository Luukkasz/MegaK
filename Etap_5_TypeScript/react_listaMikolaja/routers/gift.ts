import {Request, Response, Router} from "express";
import {GiftRecord} from "../records/gift-record";
import {ValidationError} from "../utils/error";
import {CreateGiftReq} from "../types";

export const giftRouter = Router();

giftRouter
    .get('/', async (req: Request, res: Response) => {
        const giftsList = await GiftRecord.listAll();
        res.json( {
            giftsList,
        });
    })

    .delete('/:id', async(req, res) => {
        const gift = await GiftRecord.getOne(req.params.id);

        if (!gift) throw new ValidationError('No such gift');

        if (await gift.countGivenGifts() > 0) {
            throw new ValidationError('Cannot remove given gift.')
        }

        await gift.delete();

        res.end();
    })

    .post('/', async (req: Request, res: Response) => {
        const newGift = new GiftRecord(req.body as CreateGiftReq);
        await newGift.insert();

        res.json(newGift)
    })
