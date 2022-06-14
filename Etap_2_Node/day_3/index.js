const {readFile} = require('fs').promises;
const {promisify} = require('util');

// ReadFile jest asynchroniczny
// readFile('./indesx.js', 'utf8', (err, data) => {
//     if(err === null) {
//         console.log(data);
//     } else {
//         console.log('oh no!', err)
//     }
//     console.log(data);
// });


// const readFilePromised = promisify(readFile);
// readFilePromised('./kompresowanie.js', 'utf8')
//     .then(data => console.log(data))
//     .catch(err => console.log('Oh no', err));


//promisyfy zwraca funkcje a potem wywolujemy kolejna z argumentami
// (async () => {
//     try {
//         const data = await promisify(readFile)('./kompresowanie.js', 'utf8');
//         console.log(data);
//     } catch (err) {
//         console.log('Oh no!', err);
//     }
// })();


//Skorzystanie z obiektu 'fs'.promises
(async () => {
    try {
        const data = await readFile('./kompresowanie.js', 'utf8');
        console.log(data);
    } catch (err) {
        console.log('Oh no!', err);
    }
})();
