const {tickTock} = require ('./interval');

const events = tickTock();


// Podczas zdarzenia secoundElapsed uruchom funkcje callback z console log
events.on('secoundElapsed', (data) => {
    console.log('Hi', data);
});


// To tylko raz naslucha zdarzenie
events.once('secoundElapsed', (data) => {
    console.log('Hi only one time!');
});


// Szybsza obsluga kilku zdarzen
events
    .on('secoundElapsed', () => console.log('Test1'))
    .on('secoundElapsed', () => console.log('Test2'));