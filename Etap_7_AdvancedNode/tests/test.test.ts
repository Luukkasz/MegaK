import {ChildRecord} from "../day_1_listaMikolajaTest/records/child-record";
import {pool} from "../day_1_listaMikolajaTest/utils/db";

let child: ChildRecord

beforeAll(async() => {
    child = await ChildRecord.getOne('777777')
})

afterAll(async() => {
    pool.end()
})

const myMock = jest
    .spyOn(ChildRecord.prototype, 'insert')
    .mockImplementation(async () => {
    return 'test'
})

test('foobar test', async() => {
    expect(child).toBeDefined()
})