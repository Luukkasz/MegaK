const { pbkdf2 } = require('crypto');

const SALT = 'jdsnfjsdfnsfsjdfdsyfbsdy kadmfjsnfsfbvhjdf vfsgfsfsd';
const GOOD_PASSWORD = 'b468a8ad6126cd19b89951adf14d280c2f576347d2d007613b69246c786d2fc66659629d94233d1678de365952ec97d20ac14a7cb632b6bffa8f485c7a25cb7e'

const userPassword = process.argv[2];

pbkdf2(userPassword, SALT, 10000, 64, 'sha512', (err, hash) => {
    if (err) {
        console.error('Error', err);
    } else {
        if (userPassword === GOOD_PASSWORD){
            console.log('Logged in');
        }
    }
});
