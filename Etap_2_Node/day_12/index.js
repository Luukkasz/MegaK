const {promisify} = require ('util');
const exec = promisify(require('child_process').exec);



(async () => {
    try {
        const ip = process.argv[2].replace(/[^0-9.]+/g,'');
        const data = await exec(`ping ${ip}`);
        console.log(data);
    } catch(error) {
        console.log('oh no',error.stdout);
    }
})();