"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
exports.pool = (0, promise_1.createPool)({
    port: 8889,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'megak_santa_gifts',
    namedPlaceholders: true,
    decimalNumbers: true,
});
//# sourceMappingURL=db.js.map