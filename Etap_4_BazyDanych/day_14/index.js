const mysql = require('mysql2/promise');

(async() => {
    // Dla wielu zapytan lepien zrobic const pool = await mysql.createPool...
    // Tworzy wtedy kilka polaczen i z tego sie korzysta glownie.
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'megak_cars',
        // Aby liczby były numberami (mozna stracic dokladnosc)
        decimalNumbers: true,
        namedPlaceholders: true,
    });

   // Prepared statement - zabezpieczneie przed SQL injection
   //  const [answer] = await conn.execute('SELECT * FROM `cars` WHERE `registrationNo` = ?;', ['CB 556GH'])
   //  console.log(answer)

    // Lepsza wersja prepared statement
    // const value = 10000;
    // const answer = await conn.execute('UPDATE `cars` SET `price` = `price` + :myValue WHERE `price` > :myValue', {
    //     myValue: value,
    // })
    // console.log(answer)

    const cars = [
        {
            registrationNo: 'WWY 6573G',
            brand: 'Jaguar',
            model: 'X-Type',
            color: '#000000 metalik',
            firstRegistrationAt: '2001-07-20',
            price: '15000',
        },
        {
            registrationNo: 'CT 5451G',
            brand: 'Volkswagen',
            model: 'Passat B7',
            color: '#ffffff matowy',
            firstRegistrationAt: '2014-06-22',
            price: '35000',
        },
        {
            registrationNo: 'CTR 45GHK',
            brand: 'BMW',
            model: 'X3M',
            color: '#ffffff perłowy',
            firstRegistrationAt: '2020-05-14',
            price: '199000',
        },
    ];

    const statement = await conn.prepare('INSERT INTO `cars` VALUES(?, ?, ?, ?, ?, ?)');

    try {
        for (const car of cars) {
            await statement.execute(Object.values(car));
        }
        console.log('Działa!')

    } finally {
        statement.close();
    }

})();
