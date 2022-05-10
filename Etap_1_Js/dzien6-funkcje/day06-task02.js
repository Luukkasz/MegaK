const prompt = require('prompt-sync')();


const number = Number(prompt("Podaj liczbę: "));

const even = a => a;
const odd = a => a * 2;


const checkNumber = (number) => {
    if(number % 2 === 0) {
        return even(number);
    } else {
        return odd(number);
    }
};


console.log(checkNumber(number));