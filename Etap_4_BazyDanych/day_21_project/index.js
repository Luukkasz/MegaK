const {db, client} = require("./utills/db");
const {TodoRepository} = require("./repositories/todo.repository");
const {TodoRecord} = require("./records/todo.records");
const {ObjectId} = require("mongodb");

(async () => {

    try {
        // const todo = new TodoRecord({
        //     title: 'Skonczyc projekt MongoDb 4'
        // });
        // console.log(todo)
        // await TodoRepository.insert(todo);
        // console.log(todo)
        // console.log(await TodoRepository.findAll())


        // const mytodo = await TodoRepository.find('6338171650f1cebf11d14b83')
        // mytodo.title = 'nowy tytul nnnnnn'
        // await TodoRepository.update(mytodo)
        //
        // console.log(await TodoRepository.find('6338171650f1cebf11d14b83'))

        // await TodoRepository.delete(mytodo)
    } finally {
        await client.close()
    }

})();
