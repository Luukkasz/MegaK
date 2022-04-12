const sum = (...args) => {
    let a = 0;

    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            console.log("All elements must be numbers!")
            return;
        } else {
            a += args[i];
        };
    }

    return a;
}
        


console.log(sum(1, 2, 3, 4, 5));
console.log(sum(5,5,5,5,5));