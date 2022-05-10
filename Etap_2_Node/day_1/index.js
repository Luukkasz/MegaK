const {readFile} = require('fs');

readFile('./index.js', 'utf8', (err,file) => console.log(file));
console.log('test test');