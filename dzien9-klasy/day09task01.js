 /**
 * 1. Usuń konstruktor, metody i wszystko po klasie z rzeczy, które pisaliśmy wspólnie.
 * 2. Stwórz właściwość przechowującą zajęte miejsca w zawodach.
 * 3. Stwórz metodę, która pozwoli dodać nowe zajęte miejsce do właściwości danego obiektu.
 * 4. Stwórz dwa obiekty reprezentujące 2 kraje i dodaj do nich kilka zajętych miejsc, używając przygotowanej przes siebie metody możesz ją wywoływac wielokrotnie).
 * 5.* Dodaj metodę, która sprawdzi czy kraj posiada jakiekolwiek pierwsze miejsce i jeżeli tak to wyświetl "Brawo!".
 */

 class Country {
    constructor(countryName, ...scores) {
        this.country = countryName;
        this.scores = scores;
    }

    addScore(...countryPlaces) {
        return this.scores.push(...countryPlaces);
    }

    checkwin() {
        for (let i=0; i < this.scores.length; i++) {
            if (this.scores[i] === 1) {
                return console.log("Brawo, you were 1st!")
            }
        }
    }
 }

 const poland = new Country("Poland", 2);
 const russia = new Country("Russia", 2);

 poland.addScore(1,1,1,4);
 russia.addScore(9,8,6);

 console.log(poland);
 console.log(russia);


 russia.checkwin();
 poland.checkwin();