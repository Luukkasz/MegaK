const {pool} = require("../utills/db");
const {v4: uuid} = require('uuid');

class TodoRecord {
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;

        this._validate();
    }

    _validate() {
        if (this.title.trim() < 5) {
            throw new Error('Todo title should be at least 5 characters.');
        }

        if (this.title.length > 150) {
            throw new Error ('Todo title should be at most 150 characters.')
        }
    }

    // Dodanie rekordu do bazy danych
    async insert() {
        if (typeof this.id === 'undefined') {
            this.id = uuid();
        }
        await pool.execute('INSERT INTO `todos` VALUES(:id, :title)', {
            id: this.id,
            title: this.title,
        });
        return this.id;
    }

    // Usuwanie rekordu z bazy danych
    async delete() {
        if (!this.id) {
            throw new Error('Todo has no ID.');
        }

        await pool.execute('DELETE FROM `todos` WHERE `id` = :id', {
            id: this.id,
        })
    }

    // Aktualizacja rekordu
    async update() {
        if (!this.id) {
            throw new Error('Todo has no ID.');
        }

        this._validate();

        await pool.execute('UPDATE `todos` SET `title` = :title WHERE `id` = :id', {
            id: this.id,
            title: this.title,
        });
    }

    // Metoda statyczna jest dla wszystkich obiektów
    static async find(id) {
        const [results] = await pool.execute('SELECT * FROM `todos` WHERE `id` = :id', {
            id: id,
        });
        return results.length === 1 ? new TodoRecord(results[0]) : null;
    }

    static async findAll() {
        ...
    }
}

module.exports = {
    TodoRecord,
}