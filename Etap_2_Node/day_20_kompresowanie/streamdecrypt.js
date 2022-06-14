const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;

const {createDecipher} = require('crypto');
const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);

const {ENCRYPTION_SALT} = require('./constans');


(async () => {
    const [,,oldFile, newFile, pwd] = process.argv;
    const key = await scrypt(pwd, ENCRYPTION_SALT, 24);

    // Odszyfrowanie za pomoca stream
    await pipeline (
        createReadStream(oldFile),
        createDecipher('aes-192-cbc',key),
        createWriteStream(newFile),
    )

    console.log('Decrypt done!');
})();


