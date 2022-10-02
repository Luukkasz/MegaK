const {Router} = require('express');
const {GiftRecord} = require("../records/gift-record");
const giftRouter = Router();
giftRouter
    .get('/', (req, res) => {
        const giftsList = GiftRecord.listAll();
        res.render('gift/gift-list.hbs', {
            giftsList,
        });
    });
module.exports = {
    giftRouter,
}