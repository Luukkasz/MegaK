const {watch} = require('chokidar');


watch('.', {
    //info dopiero jak zakonczy sie dzialanie/zmiana
    awaitWriteFinish: true,
})
    .on('all', (event,path) => {
        console.log(event, path);
    });