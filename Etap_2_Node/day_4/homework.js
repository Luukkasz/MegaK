const {readFile, writeFile, appendFile} = require('fs').promises;
const FILE_NAME = './data/hello.txt';

(async () => {
    try {
        const myFile = await readFile(FILE_NAME, 'utf8');
        const arrOfNumbers = myFile.split('\n');
        const numberToAdd = Number(arrOfNumbers[arrOfNumbers.length-1]) * 2;
        await appendFile(FILE_NAME, `\n${numberToAdd}`);
        console.log('File is updated');
    } catch(err) {
        console.log('Oh no!', err);
    }
})();