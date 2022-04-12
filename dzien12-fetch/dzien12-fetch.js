const fetch = require('node-fetch');
var prompt = require('prompt-sync')();

const ISBN = prompt("Podaj numer ISBN: ");

fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`)
.then(response => response.json())
.then(data => {
    console.log(data.items[0].volumeInfo.title);
    console.log(data.items[0].volumeInfo.authors.join(", "))})
.catch(error => console.log("We have an error", error));

9780521349932