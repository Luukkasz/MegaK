const prompt = require('prompt-sync')();

let a = prompt("Tell me first number: ");
let b = prompt("Tell me secound number: ");
let c = prompt("Choose what to do? (+  -  /  *) ");

if (c === "+") {
    console.log(Number(a) + Number(b));
} else if (c === "-") {
    console.log(Number(a) - Number(b));
} else if (c === "*") {
    console.log(Number(a) * Number(b));
} else if (c === "/") {
    console.log(Number(a) / Number(b));
} else {
    console.log("Wrong command :-(");
}