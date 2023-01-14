import { User } from "../testsRecords/user"

let user: User

beforeAll(async() => {
    user = new User()
})


test('User should not be logged in at the beggining', () => {
    expect(user.loggedIn).toEqual(false)
})

// test('User logged in state should not be modified outside of class', () => {
//     expect(() => {
//         user.loggedIn = true
//     }).toThrow()
// })

test('User should have no e-mail at the beggining', () => {
    expect(user.email).toBeNull()
})

// test('User email should not be modified outside of class', () => {
//     expect(() => {
//         user.email = '....'
//     }).toThrow()
// })