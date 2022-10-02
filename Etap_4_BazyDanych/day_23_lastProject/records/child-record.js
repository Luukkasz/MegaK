class ChildRecord {
    static listAll() {
        return [
            {
                id: 'abcd',
                name: 'Piotrek',
                gift: 'Cukierki',
            },
            {
                id: 'abcde',
                name: 'Marcin',
                gift: 'Samochód',
            },
            {
                id: 'abcdf',
                name: 'Ania',
                gift: 'Lalka',
            }
        ]
    }
}
module.exports = {
    ChildRecord,
}