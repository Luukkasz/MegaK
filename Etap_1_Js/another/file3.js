var prompt = require('prompt-sync')();


const userNumber = Number(prompt("Write a number: "));


const even = (a) => {
    return a;
}

const odd = (a) => {
    return a * 2;
}

function checkNumber(test) {

    if (isNaN(test)) {
        console.log("Wrong number");
        return;
    } else if (test % 2 === 0) {
        return even(test);
    } else {
        return odd(test);
    }
}



console.log(checkNumber(userNumber));


