const fetch = require('node-fetch');
const {appendFile} = require('fs').promises;
const {normalize, resolve} = require("path");

//Zabezpieczenie przed wyjsciem w foldery wyzej
function safeJoin(base, target) {
    const targetPath = '.' + normalize('/' + target);
    return resolve(base, targetPath);
}

//Nadawanie nazwy nowemu plikowi, ktory tworzymy
const getDataFileName = (city) => safeJoin(`./data/`, `${city}.txt`);


//Do drugiej funkcji nie potrzebujemy
// const cityName = process.argv[2];

//Wersja 1 z promisami ktora zastapilismy async await
// fetch('https://danepubliczne.imgw.pl/api/data/synop')
//     .then(response => response.json())
//     .then(processWeatherData)
//     .catch(error => {
//         console.log('Error has occurred: ', error);
//     });



const processWeatherData = async (data, cityName) => {
    //Wyszukujemy obiekt z naszym miastem
    const foundData = data.find(stationData => stationData.stacja === cityName);

    if (!foundData) {
        throw new Error('Takiego miasta nasze API nie posiada.');
    }

    //Zmieniamy nazwy danych na angielskie poprzez destrukturyzacje
    const {
        cisnienie: pressure,
        wilgotnosc_wzgledna: humidity,
        temperatura: temperature,
    } = foundData;

    //Budujemy naszego stringa z informacjami
    const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity}% of humidity and pressure of ${pressure} hPa.`;
    console.log(weatherInfo);

    //Tworzymy date utworzenia pliku
    const dateTimeString = new Date().toLocaleString();

    //Tworzymy lub dopisujemy do pliku nasza date i pogode
    await appendFile(getDataFileName(cityName), `${dateTimeString}\n${weatherInfo}\n`);
};

const checkCityWeather = async (cityName) => {
    try {
        const result = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const data = await result.json();
        await processWeatherData(data, cityName);

    } catch (error) {
        console.log('Error has occurred: ', error);
    }
};

checkCityWeather(process.argv[2]);