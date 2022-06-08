// Funkcja do tworzenia szyfru
const {createHmac} = require('crypto');
const salt = '%^&*hgvcbsekuhfed7qe386e8';
const hash = createHmac('sha512', salt)
    .update('Tekst do shashowania')
    .digest('hex');

console.log(hash);
