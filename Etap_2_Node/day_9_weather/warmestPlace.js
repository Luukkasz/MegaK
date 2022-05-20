const fetch = require('node-fetch');

//Sortujemy tablice z obiektami wszystkich miast wg najwyzszej temperatury oraz wyswietlamy
//Ewentualnie dodajemy sorted[0] - wtedy podaje pierwszy obiekt z najwyzsza temperatura
const processWeatherData = async (data) => {
    const dataCopy = [...data];
    const sorted = dataCopy.sort((a, b) => {
        return b.temperatura - a.temperatura;
    });

    const {
        stacja: station,
        temperatura: temperature,
    } = sorted[0];

    console.log(`Najwyzsza temperatura ${temperature} st. C jest aktualnie w ${station}`);
};


//Tutaj pobieramy dane z fetcha a na koniec dajemy funkcje processweatherdata ktora jest wyzej
const findWarmestPlaceInPoland = async () => {
    try {
        const result = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const data = await result.json();
        await processWeatherData(data);

    } catch (error) {
        console.log('Error has occurred: ', error);
    }
};

findWarmestPlaceInPoland();