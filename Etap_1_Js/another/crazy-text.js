const prompt = require('prompt-sync')();

let text = prompt("Write your text: ");

for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
        console.log(text[i].toUpperCase());
    } else {
        console.log(text[i].toLowerCase());
    }
}

