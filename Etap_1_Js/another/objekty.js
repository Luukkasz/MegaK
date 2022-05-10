var prompt = require('prompt-sync')();

// const person1 = {
//     name: "Łukasz",
//     surname: "Machalewski",
//     sayHello () {
//         console.log('Hello ' + this.name);
//     }
// }

// const person2 = {
//     name: "Iza",
//     surname: "Lewa",
//     sayHello: person1.sayHello,
// }

// person1.sayHello();
// person2.sayHello();

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

const myList = [];

for (let i = 1; i <= 3; i++) {
    const name = prompt("Say name: ");
    const surname = prompt("Say surname: ");
    
    const newPerson = new Person(name, surname);

    myList.push(newPerson);

    // Wersja skrócona i lepsza
    // for (let i = 1; i <= 5; i++) {
    //     myList.push(new Person(prompt("Say name: "), prompt("Say surname: "));
    // }
}

console.log(myList);




