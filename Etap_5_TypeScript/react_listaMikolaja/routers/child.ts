import {Request, Response, Router} from "express";
import {ChildRecord} from "../records/child-record";
import {GiftRecord} from "../records/gift-record";
import {ValidationError} from "../utils/error";
import {CreateChildReq, ListChildrenRes, SetGiftForChildReq} from "../types";

export const childRouter = Router();

childRouter
    // sciezka '/' gdyz w index.ts juz zapisalismy ten router ze sciezka '/child/'

    .get('/', async (req:Request, res: Response) => {
        const childrenList = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();
        res.json( {
            childrenList,
            giftsList,
        } as ListChildrenRes);
    })

    .post('/', async (req: Request,res: Response) => {
        const newChild = new ChildRecord(req.body as CreateChildReq);
        await newChild.insert();

        res.json(newChild);
    })

    .patch('/gift/:childId', async (req: Request,res: Response) => {
        const {body}: {
            body: SetGiftForChildReq
        } = req

        const child = await ChildRecord.getOne(req.params.childId);

        if (child === null) {
            throw new ValidationError('Nie znaleziono dziecka z podanym ID');
        }

        const gift = body.giftId === '' ? null : await GiftRecord.getOne(body.giftId);

        if (gift) {
            if(gift.count <= await gift.countGivenGifts()) {
                throw new ValidationError('Tego prezentu jest za mało');
            }
        }

        child.giftId = gift?.id ?? null;
        await child.update()

        res.json(child);

    })
