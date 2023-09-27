import {createPool} from "mysql2/promise";
import {config} from "../config/config";

export const pool = createPool({
    port: 8889,
    password: config.dbPassword,
    host: config.dbHost,
    user: config.dbUser,
    database: config.dbDatabase,
    namedPlaceholders: true,
    decimalNumbers: true,
})