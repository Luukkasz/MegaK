const prompt = require('prompt-sync')();

// Funkcja wyswietlajaca w konsoli wynik mnozenia dzielenia dodawania i odejmowania dwoch liczb;

const score = function() {
    const a = Number(prompt("Podaj pierwszą liczbę: "));
    const b = Number(prompt("Podaj drugą liczbę: "));

    if(isNaN(a) || isNaN(b)) {
        console.log("Podaj liczby a nie stringi");
        return;
    }

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}


score();