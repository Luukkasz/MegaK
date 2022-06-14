// Funkcje streamu
const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;
const {createGzip, createGunzip} = require ('zlib');

(async () => {

    await pipeline (
        createReadStream('logo.webp'),

        // Kompresja / dekompresja
        createGzip(),
        // createGunzip(),

        createWriteStream('logo2.webp'),
    );

    console.log('Done');
})();