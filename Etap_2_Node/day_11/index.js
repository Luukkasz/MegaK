const {exec} = require('child_process');

// const cp = exec('dir');  // cp to skrot od ChildProcess
//
// cp.stdout.on('data', (data) => {
//     console.log('Out> ', data);
// });
//
// cp.stderr.on('data', (data) => {
//     console.log('Error> ', data);
// });
//
// cp.on('close', () => {
//     console.log('Finished');
// });


//Lepsza wersja
exec('node test.js', (error, stdout, stderr) => {
    if (error) {
        console.error('Oh no! ', error);
    } else if (stderr) {
        console.error('Error in app! ', stderr);
    } else {
        console.log('Program has finished! ', stdout);
    }
});