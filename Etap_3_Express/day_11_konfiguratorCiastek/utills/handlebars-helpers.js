const handlebarsHelpers = {
    findPrice: (entries, selectedItem) => {
        const found = entries.find(el => {
            return el[0] === selectedItem;
        });

        if (!found) {
            throw new Error(`Cannot find price of "${selectedItem}".`)
        }

        const [, price] = found;
        return price;
    },
    pricify: (price) => price.toFixed(2),
    isInArray: (array, element) => array.includes(element),
    isNotOnArray: (array, element) => !array.includes(element),
};

module.exports = {
    handlebarsHelpers,
}
