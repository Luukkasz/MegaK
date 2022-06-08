// To pobiera klucz kryptograficzny na podstawie hashu
const { pbkdf2 } = require('crypto');
const originalText = 'Tekst do zhashowania';
const SALT = '847ruegf76fog8ngfcofoefgi7wggf wgfo'

pbkdf2(originalText, SALT, 100000, 64, 'sha512', (err,derivedKey)=> {
    if (err) throw err;
    console.log(derivedKey.toString('hex'));
});