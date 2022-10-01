const {TodoRecord} = require("../records/todo.records");
const {todos} = require("../utills/db");
const {ObjectId} = require("mongodb");


class TodoRepository {
    static _checkRecord(record) {
        if (!(record instanceof TodoRecord)) {
            throw new Error('Tworzony obiekt nie jest instancją klasy TodoRecord.')
        }
    }

    static async insert(record) {
        TodoRepository._checkRecord(record);

        const {insertedId} = await todos.insertOne(record);
        record._id = insertedId;

        return insertedId
    }

    static async delete(record) {
        TodoRepository._checkRecord(record);

        await todos.deleteOne({
            _id: record._id
        })
    }

    static async find(id) {
        const item = await todos.findOne({_id: ObjectId(String(id))});
        return item === null ? null : new TodoRecord(item)
    }

    static async findAll() {
        return (await todos.find()).toArray();
    }

    static async update(record) {
        TodoRepository._checkRecord(record);

        // rzutujemy na stringa aby nie bylo mongoInjection
        await todos.replaceOne({
            _id: record._id
        }, {
            title: String(record.title),
        });
    }
}

module.exports = {
    TodoRepository,
}