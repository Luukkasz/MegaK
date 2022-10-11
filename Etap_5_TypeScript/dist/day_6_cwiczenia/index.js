// Cwiczenie 1
function pricify(price, currency = 'PLN', vat = 0.23) {
    return `${(price + price * vat).toFixed(2)} ${currency}`;
}
console.log(pricify(10, 'PLN', 0.23));
console.log(pricify(20));
const data = [
    {
        name: 'Anna',
        points: 1000,
    },
    {
        name: 'Krzysztof',
        points: 500,
    },
    {
        name: 'Ola',
        points: 1001,
    },
    {
        name: 'Marek',
        points: 0,
    },
];
function incPoints(obj) {
    obj.points++;
}
function totalPoints(ar) {
    return ar.reduce((prev, curr) => prev + curr.points, 0);
}
function personWithMostPoints(ar) {
    if (!ar.length)
        return null;
    return ar.reduce((prev, curr) => {
        if (prev.points < curr.points) {
            return curr;
        }
        else {
            return prev;
        }
    });
}
console.log(totalPoints(data));
incPoints(data[1]);
console.log(totalPoints(data));
console.log(personWithMostPoints(data));
console.log(personWithMostPoints([]));
// Cwicenie 3
class User {
    constructor(firstName) {
        this.firstName = firstName;
    }
}
const json = '{"firstName":"Jan"}';
const { firstName } = JSON.parse(json);
let user = firstName === '' ? '' : `User ${firstName}`;
if (user !== '') {
    user = new User(user);
}
console.log(user);
//# sourceMappingURL=index.js.map