const feelGoodBtn = document.querySelector(".feelGood");
const feelBadBtn = document.querySelector(".feelBad");
const feelInfo = document.querySelector(".feelInfo");

let counter = localStorage.getItem("counter");

if(counter === null){
    counter = {
        moodGood: 0,
        moodBad: 0,
    };
} else {
    counter = JSON.parse(counter);
};

feelInfo.textContent = `*Do tej pory kliknąłeś ${counter.moodGood} razy dobrze, ${counter.moodBad} źle.`;


feelGoodBtn.addEventListener("click", () => {
   counter.moodGood++;
   feelInfo.textContent = `*Do tej pory kliknąłeś ${counter.moodGood} razy dobrze, ${counter.moodBad} źle.`;

   localStorage.setItem("counter", JSON.stringify(counter));
});

feelBadBtn.addEventListener("click", () => {
    counter.moodBad++;
    feelInfo.textContent = `*Do tej pory kliknąłeś ${counter.moodGood} razy dobrze, ${counter.moodBad} źle.`;

    localStorage.setItem("counter", JSON.stringify(counter));
});





//Zadanie 3
const sumBtn = document.querySelector(".sum-btn");
const sumInfo = document.querySelector(".sumInfo");

let numbersArray = localStorage.getItem("numbersArray");

const sumNumbers = () => {
    let sum = 0;
    for(let i = 0; i < numbersArray.length; i++){
        sum += numbersArray[i];
    };
    return sum;
};

const showSum = () => {
    sumInfo.textContent = `Suma podanych liczb to: ${sumNumbers()}`;
};


if(numbersArray === null){
    numbersArray= [];
} else {
    numbersArray = JSON.parse(numbersArray);
};


showSum();


sumBtn.addEventListener("click", () => {
    const number = Number(prompt("Podaj liczbę: "));
    numbersArray.push(number);

    showSum();

    localStorage.setItem("numbersArray", JSON.stringify(numbersArray));
});