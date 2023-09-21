import {AdRecord} from "../../records/ad.record";
import {pool} from "../../utils/db";
import {AdEntity} from "../../types";

afterAll(async () => {
    await pool.end()
} )

test('AdRecord.getOne return data from database for one entry.', async () => {
    const ad = await AdRecord.getOne('abc')
    expect(ad).toBeDefined()
    expect(ad.id).toBe('abc')
    expect(ad.name).toBe('Testowa osoba')
});

test('AdRecord.getOne returns null fromdatabase for unexisting entry', async () => {
    const ad = await AdRecord.getOne('---')
    expect(ad).toBeNull()
});

test('AdRecord.findAll returns array of found entries when searching for "a"', async () => {
    const ads = await AdRecord.findAll('a')
    expect(ads).not.toEqual([])
    expect(ads[0].id).toBeDefined()
})

test('AdRecord.findAll returns empty array when searching for sth that does not exist', async () => {
    const ads = await AdRecord.findAll('------------')
    expect(ads).toEqual([])
})

test('AdRecord.findAll returns smaller amount od data', async () => {
    const ads = await AdRecord.findAll('a')
    expect(ads).not.toEqual([])
    expect((ads[0] as AdEntity).price).toBeUndefined()
    expect((ads[0] as AdEntity).description).toBeUndefined()
})

test('AdRecord.insert returns new UUID', async () => {
    const ad = new AdRecord({
        name: 'Test Name',
        description: 'aaa',
        lat: 1,
        lon: 2,
        url: 'www.wp.pl',
        price: 0,
    });

    await ad.insert()

    expect(ad.id).toBeDefined()
    expect(typeof ad.id).toBe('string')
})

test('AdRecord.insert inserts data to database', async () => {
    const ad = new AdRecord({
        name: 'Test Name',
        description: 'aaa',
        lat: 1,
        lon: 2,
        url: 'www.wp.pl',
        price: 0,
    });

    await ad.insert()

    const foundAd = await AdRecord.getOne((ad.id))

    expect(foundAd).toBeTruthy()
    expect(foundAd.id).toBe(ad.id)
})