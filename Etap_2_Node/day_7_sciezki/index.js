const {basename, join, dirname, extname, normalize, resolve} = require('path');

//Wyswietla pelna sciezke
console.log(__dirname);
console.log(__filename);

//basename wyswietla sama nazwe pliku/katalogu
console.log(basename(__dirname));
console.log(basename(__filename));


//Metoda join laczy pathy w jedna sciezke
// const fullPath = join(__dirname, process.argv[2]);
// console.log(fullPath);


//dirname zawsze wyswietla katalog w ktorym plik sie znajduje
//basename zawsze wyswietla sama nazwe pliku/folderu
console.log('dirname', dirname(__dirname));
console.log('basename', basename(__dirname));
console.log('extname', extname(__filename));


//Funkcja zabezpieczajaca przed wyjsciem z aktualnego katalogu
function safeJoin(base,target) {
    const targetPath = '.' + normalize('/' + target);
    return resolve(base, targetPath);
};

const userPath = safeJoin(__dirname, process.argv[2]);
console.log(userPath);