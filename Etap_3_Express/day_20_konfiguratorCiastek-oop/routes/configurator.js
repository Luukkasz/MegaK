const express = require('express');
const {COOKIE_ADDONS, COOKIE_BASES} = require("../data/cookies-data");



class ConfiguratorRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.router = express.Router();
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router.get('/select-base/:baseName', this.selectBase);
        this.router.get('/add-addon/:addonName', this.addAddon);
        this.router.get('/delete-addon/:addonName', this.deleteAddon);
    }

    selectBase = (req, res) => {
        const {baseName} = req.params;

        if(!this.cmapp.data.COOKIE_BASES[baseName]) {
            return this.cmapp.showErrorPage(res, 'Wybrałeś bazę, która nie istnieje!')
        } else {
            res
                .cookie('cookieBase', baseName)
                .render('configurator/base-selected.hbs', {
                    baseName,
                })
        }
    }

    addAddon = (req, res) => {
        const {addonName} = req.params;

        if(!this.cmapp.data.COOKIE_ADDONS[addonName]) { //sprawdzanie czy taki dodatek już istnieje
            return this.cmapp.showErrorPage(res, `Składnik ${addonName} nie istnieje w naszym menu.`);
        }

        const addons = this.cmapp.getAddonsFromReq(req);

        if (addons.includes(addonName)) { //sprawdzanie czy dodatek został już dodany
            return this.cmapp.showErrorPage(res, `Składnik ${addonName} został już wybrany.`);
        }
        addons.push(addonName)
        res
            .cookie('cookieAddons', JSON.stringify(addons))
            .render('configurator/added.hbs', {
                addonName,
            });

    };

    deleteAddon = (req, res) => {
        const {addonName} = req.params;
        const oldAddons = this.cmapp.getAddonsFromReq(req);


        if (!oldAddons.includes(addonName)) {
            return this.cmapp.showErrorPage(res, 'Próbujesz usunąć dodatek, który nie był dodany!')
        }

        const addons = oldAddons.filter(addon => addon !== addonName);
        res
            .cookie('cookieAddons', JSON.stringify(addons))
            .render('configurator/deleted.hbs', {
                addonName,
            })
    }
}


module.exports = {
    ConfiguratorRouter,
}













//
//
// const configuratorRouter = express.Router();
//
// configuratorRouter
//     .get('/select-base/:baseName', (req, res) => {
//         const {baseName} = req.params;
//
//         // Walidacja czy spód jest w bazie
//         if (!COOKIE_BASES[baseName]) {
//             return showErrorPage(res, `There is no such base as ${baseName}.`)
//         }
//
//         res
//             .cookie('cookieBase', baseName)
//             .render('configurator/base-selected.hbs', {
//                 baseName,
//             })
//     })
//
//
//     .get('/add-addon/:addonName', (req, res) => {
//         const {addonName} = req.params;
//
//         // Walidacja czy dodawany dodatek jest w bazie
//         if (!COOKIE_ADDONS[addonName]) {
//             return showErrorPage(res, `There is no such addons as ${addonName}`)
//         }
//
//         const addons = getAddonsFromReq(req)
//
//         //sprawdzanie czy dodatek został już dodany
//         if (addons.includes(addonName)) {
//             return showErrorPage(res, `${addonName} is already on your cookie. You cannot add it twice.`)
//         }
//
//         addons.push(addonName)
//
//         res
//             .cookie('cookieAddons', JSON.stringify(addons))
//             .render('configurator/added', {
//                 addonName,
//             })
//     })
//
//     .get('/delete-addon/:addonName', (req, res) => {
//         const {addonName} = req.params;
//
//         const oldAddons = getAddonsFromReq(req);
//
//         if (!oldAddons.includes(addonName)) {
//             return showErrorPage(res, `Cannot delete something that isn't already added to your cookie. ${addonName} not fount on cookie.`)
//         }
//
//         const newAddons = oldAddons.filter(addon => addon !== addonName);
//         res
//             .cookie('cookieAddons', JSON.stringify(newAddons))
//             .render('configurator/deleted.hbs', {
//                 addonName,
//             })
//     });
//
// module.exports = {
//     configuratorRouter,
// };
