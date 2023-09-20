import {AdRecord} from "../../records/ad.record";

test('AdRecord return data from database for one entry.', async () => {
    const ad = await AdRecord.getOne('abc')

    console.log(ad)

    expect(ad).toBeDefined()
    expect(ad.id).toBe('abc')
    expect(ad.name).toBe('Testowa osoba')
});

test('AdRecord returns null fromdatabase for unexisting entry', async () => {
    const ad = await AdRecord.getOne('---')

    expect(ad).toBeNull()
});