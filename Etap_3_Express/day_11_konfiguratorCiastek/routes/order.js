const express = require('express');
const {getCookieSettings} = require("../utills/get-cookie-settings");

const orderRouter = express.Router();

orderRouter

    .get('/summary', (req, res) => {
        const {base, addons, sum, allBases, allAddons} = getCookieSettings(req)

        res.render('order/summary', {
            cookie: {
                base,
                addons: addons,
            },
            allBases,
            allAddons,
            sum,
        })

    })

    .get('/thanks', (req, res) => {
        const {sum} = getCookieSettings(req)

        res
            .clearCookie('cookieBase')
            .clearCookie('cookieAddons')
            .render('order/thanks', {
                sum,
            })
    })


;

module.exports = {
    orderRouter,
};
