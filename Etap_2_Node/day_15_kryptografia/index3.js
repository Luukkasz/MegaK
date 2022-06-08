// Ponoc najbezpieczniejsza forma szyfrowania
// Najbezpieczniejsza funkcja skrotu, asynchroniczna
const {hash, compare} = require('bcrypt');
hash('tekst do shashowania', 10, function(err, hash) {
   if (err) {
       console.error(err);
   } else {
       console.log(hash);

       compare('tekst do shashowania', hash, function(err, res) {
           if (res) {
               console.log('Logged in!')
           } else {
               console.log('Wrong password!')
           }
       })

   }
});

