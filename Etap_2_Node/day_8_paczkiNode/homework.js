const { watch } = require('chokidar');
const {readFile} = require('fs').promises;

//Zadanie 1
// watch(process.argv[2])
//     .on('add', path => console.log(`File ${path} has been added`))
//     .on('change', path => console.log(`File ${path} has been changed`))
//     .on('unlink', path => console.log(`File ${path} has been removed`))
//     .on('ready', () => console.log('Initial scan complete,Ready for changes'));


//Zadanie 2
watch(process.argv[2], {
    awaitWriteFinish: true,
    ignoreInitial: true,})
    .on('add', path => {
        (async () => {
            const myFile = await readFile(path, 'utf8');
            console.log(`Dodano plik ${path} z zawartoscia: `, myFile);
        })();
    })
    .on('change', path => {
        (async () => {
            const myFile = await readFile(path, 'utf8');
            console.log(`Zmieniono plik ${path} z zawartoscia: `,myFile);
        })();
    })
    .on('unlink', path => console.log(`File ${path} has been removed`))
    .on('ready', () => console.log('Initial scan complete,Ready for changes'));
