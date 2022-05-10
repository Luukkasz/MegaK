const btn = document.querySelector(".change-mode");
const count = document.querySelector(".counter");
const body = document.querySelector("body");
let counter = 0;

btn.textContent = "Change to dark mode";

btn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    if(isDark){
        btn.textContent = "Change to light mode"
    } else{
        btn.textContent = "Change to dark mode"
    };

    counter ++;
    count.textContent = counter;
});



const h2PersonDetails = document.querySelector(".personDetails");
const personInfo = localStorage.getItem("personInfo");

if(personInfo === null){
    const name = prompt("Say your name");
    const surname = prompt("Say your surname");

    const person = {
        name: name,
        surname: surname,
    };

    h2PersonDetails.textContent = `${person.name} ${person.surname}`;
    localStorage.setItem("personInfo", JSON.stringify(person));
} else {
    const oldPerson = JSON.parse(personInfo);
    h2PersonDetails.textContent = `${oldPerson.name} ${oldPerson.surname}`;
};