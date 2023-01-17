"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express = require("express");
exports.homeRouter = express.Router();
exports.homeRouter
    .get('/', (req, res) => {
    res.redirect('/child');
});
//# sourceMappingURL=home.js.map