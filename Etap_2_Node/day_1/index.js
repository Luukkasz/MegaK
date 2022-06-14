const {readFile} = require('fs');

readFile('./kompresowanie.js', 'utf8', (err,file) => console.log(file));
console.log('test test');