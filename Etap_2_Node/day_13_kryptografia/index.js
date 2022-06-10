// Szyfrowanie
const { promisify } = require('util');
const scrypt = promisify(require('crypto').randomBytes);
const { createCipheriv } = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

(async () => {
    const key = await scrypt(password, 'salt', 24);
    const iv = await randomBytes(16);

    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log({
        encrypted,
        iv: iv.toString('hex'),
    });
})();


// Deszyfrowanie
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const { createDecipheriv } = require('crypto');

const algorithm = 'aes-192-cbc';
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const { createDecipheriv } = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const encrypted = 'fff1ecd159396550172052bba431c26962ca528e569afb8327144f90258b6bb5';
const ivHex = '064a994cb6d42de49e45bff7c144d112';

(async () => {
    //First, we'll generate the key. The key length is dependent on the algorithm.
    //In this case for aes192, it is 24 bytes (192 bits).
    const key = await scrypt(password, 'salt', 24);
    const iv = Buffer.from(ivHex, 'hex'); //Initialization vector.

    const decipher = createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log(decrypted);
})();