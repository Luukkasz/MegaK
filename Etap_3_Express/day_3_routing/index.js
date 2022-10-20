const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello from backend!</h1>')
});

app.listen(port);


// Parametry ścieżek
// /stala/sciezka/:zmienna
// /stala/inna/sciezka/:zmienna1/:zmienna1


// Parametry opcjonalne
// /article/:id/:title?


// Odbieranie parametrów
// Wszystkie przesłane parametry są dostępne w obiekcie req.params

// Co robi res.send()
// Ustawia  nagłówek Content-Type automatycznie w zależności co wyślemy.
//     Ustawia nagłówek Content-Length automatycznie.
//     Ustawia nagłówki związane z podstawowym cachingiem.
//     Konwertuje dane jeżeli to potrzebne.
//     Przesyła dane.
//     Kończy połączenie.


// res.json()
// Ponieważ zdecydowana większość API jakie się tworzy otrzymuje i przesyła JSON-a - Express ma wbudowaną metodę pomoczniczą do wysyłania go.


// Przekierowania
// Podstawowe przekierowanie wygląda np. tak:
// app.get('/', (req, res) => {
//     res.redirect(301, '/nowa/ścieżka');
// });

// Kody statusów HTTP do przekierowania
// 301 - przekierowanie trwałe - przeglądarka, czy wyszukiwarka powinna zapamiętać nowy adres i nie odpytywać już do tego starego na który przekierowuje.
// 302 - przekierowanie niestałe - w tym momencie nalezy przejść na podany adres, ale mże się to zmienić w każdej chwili.
// 303 - zobacz gdzieindziej - działanie takie samo jak 302, ale używane przy metodzie HTTP innej niż GET, jednak mające przekierować na metodę GET.
// 307 - przekierowanie tymczasowe - znaczenie podobne co 302, ale używane przy metodzie HTTP innej niż GET.