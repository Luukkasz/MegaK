const {promisify} = require ('util');
const exec = promisify(require('child_process').exec);
const {normalize} = require('path');

// Zadanie 1
// (async () => {
//     try {
//         const programName = process.argv[2];
//         if(programName === 'Kalkulator'){
//             await exec('calc.exe')
//         } else if(programName === 'Paint'){
//             await exec ('mspaint.exe')
//         } else {
//             console.log('cos nie tak');
//         }
//     } catch(error){
//         console.log(error);
//     }
// })();

// Zadanie 2
(async () => {
    const myPath = process.argv[2];
    const normalizedMyPath = normalize(myPath);

    try {
        const data = await exec('dir', {
            cwd: normalizedMyPath,
        });
        console.log(data.stdout);
    } catch(e){
        console.log('oh no!', e);
    }
})();