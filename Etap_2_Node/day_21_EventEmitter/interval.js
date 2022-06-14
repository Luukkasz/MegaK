const {EventEmitter} = require('events');

// Podejscie funkcyjne
function tickTock() {
    const ee = new EventEmitter();
    setInterval(() => {
        // Emit informuje o zdarzeniu, po przecinku parametry
        ee.emit('secoundElapsed', 'test');
    },1000);
    return ee;
}

// Podejscie klasowe
class TickTock extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('secoundElapsed', 'test');
        },1000);
    }
}


module.exports = {
    tickTock,
    TickTock,
};