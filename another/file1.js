const prompt = require('prompt-sync')();

let a;
let b;
let c;

a = prompt("Tell me your name ");
b = prompt("Now tell me your surname ");
c = prompt("Cool. How old are you? ");

if (c >= 18) {
    console.log(a,b);
} else {
        console.log("You are too young");
    }