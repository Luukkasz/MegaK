//Tworzymy klasę z koszykiem sklepu internetowego
class Basket {
    //Tu nie trzeba pisac constructor gdyz on z automatu jest dolozony przez JS
    constructor() {
        this.items = [];
        this.totalValue = 0;
    };

    //Metody w klasie Basket
    add(item){
        this.items.push(item);
        this.addToTotalValue(item.price);
    };

    addToTotalValue(newPrice){
        this.totalValue += newPrice
    };

    //Całkowita wartość koszyka
    getTotalValue(){
        return this.items.reduce((acc, item) => acc + item.price, 0)
    };

    //Wyświetlanie wszystkich elementów koszyka
    showBasket(){
        this.items.forEach((item, index) => {
            console.log(`${index+1} - ${item.name} - ${item.price.toFixed(2)}zł`);
        });
    };

    //Usuwanie elementu o numerze ktory wyswietlil sie klientowi (dlatego -1)
    remove(no){
        this.items.splice(no -1, 1)


    };
};



//Tworzymy klasę tworzącą produkty dodane do koszyka
class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    };

    //Zmiana ceny w produkcie
    setNewPrice(newPrice){
        this.price = newPrice;
    };
};





//Tworzymy instancję klasy Basket
const shopBasket = new Basket();

//Tworzymy instancję (produkty) z klasy Product
const oranges = new Product("Pomarańcze Luz", 7.55);
const cucumbers = new Product("Ogórek duży", 8.2);


//Dodajemy produkty do koszyka
shopBasket.add(oranges);
shopBasket.add(cucumbers);
shopBasket.add(oranges);

console.log(shopBasket);
shopBasket.showBasket();
shopBasket.remove(1);
shopBasket.showBasket();