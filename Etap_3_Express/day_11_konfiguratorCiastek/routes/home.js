const express = require('express');
const {getCookieSettings} = require("../utills/get-cookie-settings");

const homeRouter = express.Router();

homeRouter
    .get('/', (req, res) => {
        const {base, addons, sum, allBases, allAddons} = getCookieSettings(req)

        res.render('home/index', {
            cookie: {
                base,
                addons: addons,
            },
            allBases,
            allAddons,
            sum,
        })
    });

module.exports = {
    homeRouter,
};
