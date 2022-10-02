class GiftRecord {
    static listAll() {
        return [
            {
                id: 'abcd',
                name: 'Cukierki',
                count: 5,
            },
            {
                id: 'abcde',
                name: 'Samochód',
                count: 3,
            },
            {
                id: 'abcdf',
                name: 'Lalka',
                count: 2,
            }
        ]
    }
}
module.exports = {
    GiftRecord,
}