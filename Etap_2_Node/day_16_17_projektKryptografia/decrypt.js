const {readFile, writeFile} = require('fs').promises;
const {decryptText, hash} = require('../day_13_kryptografia/index2');
const [,,fileName, pwd] = process.argv;
const {ENCRYPTION_SALT, HASH_SALT} = require('./constans');

// Odszyfrowujemy plik korzystajac z funckji decryptText

(async () => {
    const json = await readFile(fileName, 'utf8');
    const encrypted = JSON.parse(json);
    const decrypted = await decryptText(encrypted.encrypted, pwd, ENCRYPTION_SALT, encrypted.iv);
    const decryptedHash = hash(decrypted, HASH_SALT);

    if (decryptedHash === encrypted.hash) {
        await writeFile(fileName, decrypted, 'utf8');
    } else {
        console.error('File is not original!');
    }

    console.log('Program done');
})();