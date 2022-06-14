const {TickTock} = require ('./interval');

// Dzieki temu ze klasa TickTock ma extends EventEmitter to ma wszystkie
// Jej metody, jak on, once itd.
new TickTock()
    .on('secoundElapsed', () => console.log('Test'))
    .once('secoundElapsed', () => console.log('Only once!'));