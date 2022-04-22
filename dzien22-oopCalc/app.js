class Calculator {
    constructor(numA, numB) {
        if(isNaN(Number(numA)) || isNaN(Number(numA))){
            throw new Error("numA and numB must be numbers")
        }
        this.numA = Number(numA);
        this.numB = Number(numB);
    };

    add() {
        return this.numA + this.numB
    }

    subtract() {
        return this.numA - this.numB
    }

    multiply() {
        return this.numA * this.numB
    }

    divide() {
        if(this.numB === 0){
            throw new Error("You can't divide by 0")
        }
        return this.numA / this.numB
    }
}


try {
    const num1 = prompt("podaj liczbe a");
    const num2 = prompt("podaj liczbe b");
    const newCalc = new Calculator(num1,num2);

    console.log(newCalc.add());
    console.log(newCalc.subtract());
    console.log(newCalc.multiply());
    console.log(newCalc.divide());

} catch(error) {
    alert(`Wystapil blad: ${error}`);

} finally {
    console.log("Zakonczono skrypt");
}
