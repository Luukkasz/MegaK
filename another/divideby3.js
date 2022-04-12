const prompt = require('prompt-sync')();

for (let i = 0; i < 100; i++) {
    if (i === 0) {
        continue;
    } if (i % 3 === 0) {
        console.log("Number " + i);
    }
}