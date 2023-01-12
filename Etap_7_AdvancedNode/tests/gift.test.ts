import {GiftRecord} from "../day_1_listaMikolajaTest/records/gift-record";
import {pool} from "../day_1_listaMikolajaTest/utils/db";

afterAll(async () => {
    await pool.end()
})

test('Not inserted GiftRecord should have no id', async () => {

    const newGift = new GiftRecord({
        name: 'testowy',
        count: 1231,
    })

    expect(newGift.id).toBeUndefined()
});

test('Inserted GiftRecord should have id', async () => {

    const newGift = new GiftRecord({
        name: 'testowy',
        count: 1231,
    })

    await newGift.insert()

    expect(newGift.id).toBeDefined()
});