// Wersja z .promises i async/await
// const {readFile} = require('fs').promises;
//
// (async () => {
//   try {
//     const data = await readFile('./index.js', 'utf8');
//     console.log(data);
//   } catch(err) {
//     console.log('Oh no', err);
//   }
// })();

/**
 * Wersja z util.promisify
 *
 * const {readFile} = require('fs');
 const {promisify} = require('util');

 const readFilePromised = promisify(readFile);

 readFilePromised('./index.js', 'utf8')
 .then(data => {
    console.log(data);
  })
 .catch(error => {
    console.log('Oh no', error);
  });

 */


/**
 * Wersja z callback
 *
 * const {readFile} = require('fs');

 readFile('./index.js', 'utf8', (error, data) => {
  if (error === null) {
    console.log(data);
  } else {
    console.log('On no!', error);
  }
});

 */

//Zadanie domowe
const {lookup} = require(`dns`).promises;
const {promisify} = require('util');

// Uzycie callbackow
lookup('google.com', (error, data) => {
    if (error === null) {
        console.log(data);
    } else {
        console.log('Moj blad:', error)
    }
})


//Uzycie util.promisiy()
const lookupPromised = promisify(lookup);
lookupPromised('google.com')
    .then(data => console.log(data.address))
    .catch(error => console.log('Moj blad:', error));

//Uzycie async / await
(async () => {
    try {
        const data = await lookup('google.com');
        console.log(data.address);
    } catch(err) {
        console.log(err);
    }
})();