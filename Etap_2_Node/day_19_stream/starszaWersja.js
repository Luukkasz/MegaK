const {createReadStream, createWriteStream} = require('fs');

const r = createReadStream('logo.webp');
const w = createWriteStream('logo2.webp');

r.pipe(w);
r.on('end', ()=> console.log('Ready'));