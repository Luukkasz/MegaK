import {createPool} from "mysql2/promise";


export const pool = createPool({
    port: 8889,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'megak_santa_gifts',
    namedPlaceholders: true,
    decimalNumbers: true,
});