//Tworzymy klasę z koszykiem sklepu internetowego
class Basket {
    //Tu nie trzeba pisac constructor gdyz on z automatu jest dolozony przez JS
    constructor() {
        this.items = [];
        this.totalValue = 0;
    };

    clear(){
        this.items.length = 0;
    }

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