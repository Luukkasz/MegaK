// Cwiczenie 1
function pricify(
    price: number,
    currency = 'PLN',
    vat = 0.23): string {

    return `${(price + price * vat).toFixed(2)} ${currency}`
}

console.log(pricify(10, 'PLN', 0.23))
console.log(pricify(20))


// Cwiczenie 2
interface Person {
    name: string;
    points: number;
}


const data:  Person[] = [
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

function incPoints(obj: Person): void {
    obj.points++;
}

function totalPoints(ar:  Person[]): number {
    return ar.reduce((prev, curr) => prev + curr.points, 0);
}

function personWithMostPoints(ar:  Person[]): Person | null {
    if(!ar.length) return null
    return ar.reduce((prev, curr) => {
        if(prev.points < curr.points) {
            return curr;
        } else {
            return prev;
        }
    });
}

console.log(totalPoints(data))
incPoints(data[1]);
console.log(totalPoints(data));
console.log(personWithMostPoints(data))
console.log(personWithMostPoints([]))

// Cwicenie 3

class User {
    firstName: string;
    constructor(firstName: string) {
        this.firstName = firstName;
    }
}

const json: string = '{"firstName":"Jan"}';
const {firstName} = JSON.parse(json) as User;

let user: string | User = firstName === '' ? '' : `User ${firstName}`;

if (user !== '') {
    user = new User(user);
}

console.log(user);

// test git-a