const {URLSearchParams} = require('url');

// URLSearchParams pozwala zamieniac zspacje na inne znaki
const qs = new URLSearchParams();

qs.set('name', 'Bartek & Kuba?');

console.log(qs.toString());
console.log(qs + '');

console.log(`http://localhost:3033/?${qs.toString()}`);