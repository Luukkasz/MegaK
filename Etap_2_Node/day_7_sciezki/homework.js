const {basename, join, dirname, extname, normalize, resolve} = require('path');

const myPath = join(__dirname, process.argv[2]);
// console.log('Pelna sciezka: ', myPath);
// console.log('Sciezka konczaca sie na katalogu (dirname): ', dirname(myPath));
// console.log('Sama nazwa pliku (basename): ', basename(myPath));
// console.log('Sama nazwa rozszerzenia (extname): ',extname(myPath));

function safeJoin(base,target) {
    const targetPath = '.' + normalize('/' + target);
    return resolve(base, targetPath);
};

const userPath = safeJoin(__dirname, process.argv[2]);
console.log('Pelna sciezka: ', userPath);
console.log('Sciezka konczaca sie na katalogu (dirname): ', dirname(userPath));
console.log('Sama nazwa pliku (basename): ', basename(userPath));
console.log('Sama nazwa rozszerzenia (extname): ',extname(userPath));
