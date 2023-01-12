import {Request, Response, Router} from "express";
import {ChildRecord} from "../records/child-record";
import {GiftRecord} from "../records/gift-record";
import {ValidationError} from "../utils/error";

export const childRouter = Router();

childRouter
    // sciezka '/' gdyz w index.ts juz zapisalismy ten router ze sciezka '/child/'

    .get('/', async (req:Request, res: Response) => {
        const childrenList = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();
        res.render('children/children-list.hbs', {
            childrenList,
            giftsList,
        });
    })

    .post('/', async (req: Request,res: Response) => {
        const newChild = new ChildRecord(req.body);
        await newChild.insert();

        res.redirect('/child');
    })

    .patch('/gift/:childId', async (req: Request,res: Response) => {
        const child = await ChildRecord.getOne(req.params.childId);

        if (child === null) {
            throw new ValidationError('Nie znaleziono dziecka z podanym ID');
        }

        const gift = req.body.giftId === '' ? null : await GiftRecord.getOne(req.body.giftId);

        if (gift) {
            if(gift.count <= await gift.countGivenGifts()) {
                throw new ValidationError('Tego prezentu jest za mało');
            }
        }

        child.giftId = gift?.id ?? null;
        await child.update()

        res.redirect('/child');

    })
