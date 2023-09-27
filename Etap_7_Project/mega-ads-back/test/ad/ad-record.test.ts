import {AdRecord} from "../../records/ad.record";

const defaultObj = {
    name: 'Test Name',
    description: 'aaa',
    lat: 1,
    lon: 2,
    url: 'www.wp.pl',
    price: 0,
}

test('Can build AdRecord', () => {
    const ad = new AdRecord(defaultObj);

    expect(ad.name).toBe('Test Name')
    expect(ad.description).toBe('aaa')
})

test ('Validates invalid price', () => {
    expect(() => new AdRecord({...defaultObj, price: 999999999})).toThrow('Cena nie może być mniejsza niż 0 lub większa niż 9 999 999.')
})

// @TODO: Check all  the validations