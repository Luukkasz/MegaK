const {createReadStream, createWriteStream} = require('fs');

const r = createReadStream('logo.webp');
const w = createWriteStream('logo2.webp');

r.on('data', data=> w.write(data));
r.on('end', ()=> {
    w.close();
    console.log('Ready!')
});