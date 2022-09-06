const mysql = require('mysql2/promise');

(async() => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'megak_cars',
    });

   // const [results,] = await conn.execute('SELECT * FROM `cars` WHERE `registrationNo` = "CTR 225G"');
  const answer = await conn.execute('UPDATE `cars` SET `price` = `price` + 5000 WHERE `registrationNo` = "CTR 225G";')
    console.log(answer)

})();

