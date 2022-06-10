// Funkcje streamu
const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;

(async () => {
    // Tworzenie odczytywalnego streamu
    const openFileStream = createReadStream('logo.webp');
    // Tworzenie zapisywalnego streamu
    const writeFileStream = createWriteStream('logo2.webp');

    // Laczenie streamow
    await pipeline (
        openFileStream,
        writeFileStream,
    );

    // //Najprosciej najszybciej
    // await pipeline (
    //     createReadStream('logo.webp'),
    //     createWriteStream('logo2.webp'),
    // );

    console.log('Done');
})();