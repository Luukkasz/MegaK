const {ObjectId} = require("mongodb");
const {todos} = require("../utills/db");

class TodoRecord {
    constructor(obj) {
        this._id = ObjectId(obj._id);
        this.title = obj.title;

        this._validate();
    }

    _validate() {
        if (this.title.trim() < 5) {
            throw new Error('Todo title should be at least 5 characters.');
        }

        if (this.title.length > 150) {
            throw new Error('Todo title should be at most 150 characters.')
        }
    }

    async insert() {
        const {insertedId} = await todos.insertOne({
            id: this._id,
            title: String(this.title),
        });
        this._id = insertedId;

        return insertedId
    }

    async delete() {
        await todos.deleteOne({
            _id: this._id
        })
    }

    static async find(id) {
        const item = await todos.findOne({_id: ObjectId(String(id))});
        return item === null ? null : new TodoRecord(item)
    }

    static async findAll() {
        return (await(await todos.find()).toArray()).map(obj => new TodoRecord(obj));
    }

    static async findAllWithCursor() {
        return /* await */ todos.find()
    }

    async update() {
        await todos.replaceOne({
            _id: this._id
        }, {
            title: String(this.title),
        });
    }
}

module.exports = {
    TodoRecord,
}