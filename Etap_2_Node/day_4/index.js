const {readFile, writeFile, appendFile} = require('fs').promises;


// readFile('./index.js', 'utf8', (err, data) => {
//     if(err === null) {
//         console.log(data);
//     } else {
//         console.log('oh no!', err)
//     }
//     console.log(data);
// });

// writeFile('./data/hello.txt', 'Hello, World!', 'utf8', error => {
//     if(error) {
//         console.log('Oh no!', error);
//     } else {
//         console.log('File is saved.');
//     };
// });

const FILE_NAME = './data/hello.txt';


(async () => {
    try {
        const numberFromFile = Number(await readFile(FILE_NAME, 'utf8'));
        await appendFile(FILE_NAME, `\n${(numberFromFile * 2).toString()}`, 'utf8');
        console.log('File is saved');

    } catch (error) {
        console.log('Oh no!', error);
    }
})();

// (async () => {
//     try {
//         await writeFile('./data/hello.txt', 'Hello, World!\n', {
//             flag: 'a',
//         });
//         console.log('File is saved');
//     } catch(error) {
//         console.log('Oh no!', error);
//     };
// })();


