var prompt = require('prompt-sync')();

// Ćwiczenie 1


const myyMath = () => {
    const number1 = Number(prompt("Write first number: "));
    const number2 = Number(prompt("Write secound number: "));

    if (isNaN(number1) || isNaN(number2)) {
        console.log("Wrong numbers");
        return;
    };

    const multi = number1 * number2;
    const div = number1 / number2;
    const add= number1 + number2;
    const sub= number1 - number2;

    console.log(number1 + " * " + number2 + " = " + multi);

    console.log(number1 + " / " + number2 + " = " + div);

    console.log(number1 + " + " + number2 + " = " + add);

    console.log(number1 + " - " + number2 + " = " + sub);
}


myyMath();