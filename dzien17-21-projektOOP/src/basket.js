//Tworzymy klasę z koszykiem sklepu internetowego
class Basket {
    //Tu nie trzeba pisac constructor gdyz on z automatu jest dolozony przez JS
    constructor() {
        const ls = this.loadFromLocalStorage();
        this.items = ls ? ls : [];

        // Dwie kreski sprawdzaja true/false
        // this.items = ls || [];
        //Dwa znaki sprawdzaja czy ls to null lub undyfined
        // this.items = ls ?? [];
    };

    //Czyszczenie koszyka
    clear(){
        this.items.length = 0;
        this.saveToLocalStorage();
    }

    //Metody w klasie Basket
    add(item){
        this.items.push(item);
        this.saveToLocalStorage();
    };


    //Całkowita wartość koszyka
    getTotalValue(){
        return this.items.reduce((acc, item) => acc + item.price, 0)
    };

    //Funkcja zwracajaca obiekt z id oraz elementami koszyka: index - nazwa - cena
    getBasketSummary(){
      return this.items
          .map((product, index) => {
              return {
                  id: index + 1,
                  text: `${index+1} - ${product.name} - ${product.price.toFixed(2)}zł`,
              };
          });
    };


    //Usuwanie elementu o numerze ktory wyswietlil sie klientowi (dlatego -1)
    remove(no){
        this.items.splice(no -1, 1);
        this.saveToLocalStorage();
    };


    //Zapisywanie w localstorage, dodajemy do kazdej metody ktora zmienia items w Baskecie
    saveToLocalStorage(){
       localStorage.setItem("basket-items", JSON.stringify(this.items));

    };

    loadFromLocalStorage(){
        // const itemJSON = localStorage.getItem("basket-items");
        // if (itemJSON === null){
        //     return []
        // } else {
        //     return JSON.parse(itemJSON);
        // };

        return JSON.parse(localStorage.getItem("basket-items"));
    }

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