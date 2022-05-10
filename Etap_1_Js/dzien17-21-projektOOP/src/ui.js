//Używamy rozproszenia (spread) aby zamienić od razu pseudotablice node w tablice array
const buyBtns = [...document.querySelectorAll("[data-name]")];
const basketUl = document.querySelector(".basket-list");
const buyAllBtn = document.querySelector(".btn-buy-all");

//Tworzymy nowy koszyk do ktorego beda dodawane produkty poprzez add(produkt)
const basket = new Basket();


//Usuwanie produktu po kliknieciu w niego w koszyku + aktualizacja UL
const removeItem= (event) => {
    console.log("usuwanie elementu", event.target.dataset.id );
    basket.remove(Number(event.target.dataset.id));
    createBasketUl();
};



//Po kliknieciu kup! dodaje i wyswietla produkt w koszyku na stronie
const createBasketUl = () => {
    basketUl.innerText = "";

    //Tworzymy tablice produktow w koszyku i dla kazdego elementu z tablicy osobny tag li i wstawiamy w ul
    const summaryObject = basket.getBasketSummary()
    summaryObject.forEach((product) => {
        const newLi = document.createElement("li");
        newLi.innerText = product.text;
        newLi.dataset.id = product.id;
        newLi.addEventListener("click", removeItem);
        basketUl.appendChild(newLi);
    });

    //Tworzymmy odpowiedni napis na buttonie podsumowujacym zamowienie
    const basketTotalValue = basket.getTotalValue();
    buyAllBtn.innerText = `Złóż zamówienie na kwotę ${basketTotalValue.toFixed(2)}zł`;
    basketTotalValue ? buyAllBtn.disabled = false : buyAllBtn.disabled = true;
};



//Funkcja do addeventlistener tworzaca nowy obiekt produktu i dodajaca go do obiektu koszyka po kliknieciu kup!
const addProductToBasket = event => {
    const name = event.target.dataset.name;
    const price = Number(event.target.dataset.price);
    const newProduct = new Product(name, price);
    basket.add(newProduct);

   createBasketUl();

};



//Wywolanie dodania produktu do koszyka basket po kliknieciu kup!
buyBtns.forEach(btn => {
    btn.addEventListener("click", addProductToBasket);
});



//Alert po kliknieciu zlozenia zamowienia + zerowanie koszyka
const buyAllProducts = () => {
    const basketTotalValue = basket.getTotalValue();
    alert(`Zakupiono produkty o wartości ${basketTotalValue.toFixed(2)}zł`)
    basket.clear();
    createBasketUl();
};

buyAllBtn.addEventListener("click", buyAllProducts)

//Wywolujemy aby pokazalo koszyk z localstorage od razu
createBasketUl();