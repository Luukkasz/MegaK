const express = require('express');
const {getAddonsFromReq} = require("../utills/get-addons-from-req");
const {COOKIE_ADDONS, COOKIE_BASES} = require("../data/cookies-data");
const {showErrorPage} = require("../utills/show-error-page");

const configuratorRouter = express.Router();

configuratorRouter
    .get('/select-base/:baseName', (req, res) => {
        const {baseName} = req.params;

        // Walidacja czy spód jest w bazie
        if (!COOKIE_BASES[baseName]) {
            return showErrorPage(res, `There is no such base as ${baseName}.`)
        }

        res
            .cookie('cookieBase', baseName)
            .render('configurator/base-selected.hbs', {
                baseName,
            })
    })


    .get('/add-addon/:addonName', (req, res) => {
        const {addonName} = req.params;

        // Walidacja czy dodawany dodatek jest w bazie
        if (!COOKIE_ADDONS[addonName]) {
            return showErrorPage(res, `There is no such addons as ${addonName}`)
        }

        const addons = getAddonsFromReq(req)

        //sprawdzanie czy dodatek został już dodany
        if (addons.includes(addonName)) {
            return showErrorPage(res, `${addonName} is already on your cookie. You cannot add it twice.`)
        }

        addons.push(addonName)

        res
            .cookie('cookieAddons', JSON.stringify(addons))
            .render('configurator/added', {
                addonName,
            })
    })

    .get('/delete-addon/:addonName', (req, res) => {
        const {addonName} = req.params;

        const oldAddons = getAddonsFromReq(req);

        if (!oldAddons.includes(addonName)) {
            return showErrorPage(res, `Cannot delete something that isn't already added to your cookie. ${addonName} not fount on cookie.`)
        }

        const newAddons = oldAddons.filter(addon => addon !== addonName);
        res
            .cookie('cookieAddons', JSON.stringify(newAddons))
            .render('configurator/deleted.hbs', {
                addonName,
            })
    });

module.exports = {
    configuratorRouter,
};
