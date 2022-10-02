const {Router} = require('express');
const {ChildRecord} = require("../records/child-record");
const {GiftRecord} = require("../records/gift-record");
const childRouter = Router();
childRouter
    // sciezka '/' gdyz w index.js juz zapisalismy ten router ze sciezka '/child/'

    .get('/', (req, res) => {
        const childrenList = ChildRecord.listAll();
        const giftsList = GiftRecord.listAll();
        res.render('children/children-list.hbs', {
            childrenList,
            giftsList,
        });
    });
module.exports = {
    childRouter,
}