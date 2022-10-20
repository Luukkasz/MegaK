const express = require('express');

// Tworzenie aplikacji backendowej - web serwera
const app = express();


// Nasluchiwanie wylacznie polaczen GET na sciezce glownej '/'
app.get('/', () => {
    console.log('Witaj świecie!')
})

app.get('/hello', () => {
    console.log('Cześć!')
})

app.post('/hello', () => {
    console.log('Czesc, metoda post!')
})


// Nasłuchiwanie na konkretny port
app.listen(3033);