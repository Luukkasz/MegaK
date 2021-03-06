/**
 * Używaj w zadaniach metod tablicowych!
 * 1. Wylicz średnią ocen.
 * 2. Następnie wypisz wszystkie oceny min. 4.
 */

 const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];


 // 3. Napisz kod, który za pomocą jednego ciągu (możesz skorzystać z programowania funkcyjnego i rozdzielić na funkcje) osiągnie następujący efekt:
 // Wyświetli pojedynczo każdą nazwę miasta, która ma parzystą liczbę znaków. Nazwy miast powinny być pisane wielkimi literami.
 
 const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];


//  Zadanie 1

 const average = array => {
     let sum = 0;

     array.forEach(element => sum+=element);

     return sum / array.length;
 };



//  Zadanie 2

 const minfour = array => {
     array
     .filter(grade => grade >= 4)
     .forEach(grade => console.log(grade));
 };


//  Zadanie 3

 const evenCities = array => {
     array
     .filter(city => city.length % 2 === 0)
     .map(city => city.toUpperCase())
     .forEach(city => console.log(city));
 };



const evenLength = city => city.length % 2 === 0;
const bigName = city => city.toUpperCase();
const show = city => console.log(city);


 const evenCities2 = array => {
     array
     .filter(evenLength)
     .map(bigName)
     .forEach(show);
 }


 evenCities2(cities);

