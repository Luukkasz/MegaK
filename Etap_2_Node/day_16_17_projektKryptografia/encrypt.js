const {readFile, writeFile} = require('fs').promises;
const {encryptText, hash} = require('../day_13_kryptografia/index2');
const {ENCRYPTION_SALT, HASH_SALT} = require('./constans');

const [,,fileName, pwd] = process.argv;

// Szyfrujemy wskazany plik oraz dopisujemy do pliku jego hash aby potem sprawdic czy to ten sam plik

(async () => {
    const content = await readFile(fileName, 'utf-8');
    const contentHash = hash(content, HASH_SALT);
    const encrypted = await encryptText(content, pwd, ENCRYPTION_SALT);
    encrypted.hash = contentHash;
    await writeFile(fileName, JSON.stringify(encrypted), 'utf8');
    console.log('done');
})();