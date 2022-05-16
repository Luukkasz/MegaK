const {readFile, writeFile, readdir, stat} = require('fs').promises;


// (async () => {
//     try {
//         const readedFile = JSON.parse(await readFile('./data/input1.json', 'utf8'));
//         const sumOfArray = readedFile.reduce((acc, current) => acc + current, 0);
//         await writeFile('./data/sum.txt', sumOfArray.toString(), 'utf8');
//         console.log('Zapisano plik');
//     } catch (error) {
//         console.log('Mamy blad!', error);
//     }
// })();

const startPath = '.';

async function showFilesInDirectory(path) {
    try {
        const myFiles = await readdir(path);
        for (const file of myFiles) {
            const fileStat = await stat(`${path}/${file}`);
            console.log(file);
            if(fileStat.isDirectory()){
                await showFilesInDirectory(`${path}/${file}`)
            }
        };
    } catch(err) {
        console.log('Blad!', err);
    }
};

showFilesInDirectory(startPath);