/**
 * 1. Usuń konstruktor, metody i wszystko po klasie z rzeczy, które pisaliśmy wspólnie.
 * 2. Stwórz właściwość przechowującą zajęte miejsca w zawodach.
 * 3. Stwórz metodę, która pozwoli dodać nowe zajęte miejsce do właściwości danego obiektu.
 * 4. Stwórz dwa obiekty reprezentujące 2 kraje i dodaj do nich kilka zajętych miejsc, używając przygotowanej przes siebie metody możesz ją wywoływac wielokrotnie).
 * 5.* Dodaj metodę, która sprawdzi czy kraj posiada jakiekolwiek pierwsze miejsce i jeżeli tak to wyświetl "Brawo!".
 */

class Score {
    constructor(country, ...places) {
        this.country = country;
        this.place = places;
    }

    addPlace(...newPlaces) {
        this.place.push(...newPlaces);
    }

    haveFirstPlace() {
        for(let i = 0; i < this.place.length; i++) {
            if(this.place[i] === 1){
                return console.log("Brawo byłeś minimum raz pierwszy");
            }
        }
    return console.log("Nie udało ci się być pierwszym :(")
    }
    }


const poland = new Score("Poland", 2,2,3,1);
const russia = new Score("Russia", 3,1);


poland.addPlace(2,3);



console.log(poland);
console.log(russia);

poland.haveFirstPlace();
russia.haveFirstPlace();
