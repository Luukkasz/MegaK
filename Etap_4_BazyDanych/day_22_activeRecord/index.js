const {db, client} = require("./utills/db");
const {TodoRecord} = require("./records/todo.records");
const {ObjectId} = require("mongodb");

(async () => {

    try {
        // console.log(await TodoRecord.findAll())

        // const todo = await TodoRecord.find("63396c6441cc2c961e3198af")
        // todo.title = 'Rozpoczac projekt na zakonczenie etapu bazy danych'
        // await todo.update()
        //
        // console.log(await TodoRecord.findAll())

        for await (const todo of await TodoRecord.findAllWithCursor()) {
            console.log(new TodoRecord(todo))
        }


    } finally {
        await client.close()
    }

})();
