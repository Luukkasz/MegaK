const {pool} = require("./utills/db");
const {TodoRecord} = require("./records/todo.records");


(async() => {
    // const firstTodoItem = new TodoRecord({
    //     title: 'Zrobic dzien 5, tydzien 4',
    // });
    //
    // const newId = await firstTodoItem.insert();
    //
    // console.log(newId);
    //
    // await firstTodoItem.delete();

    const foundTodo = await TodoRecord.find('f0935dab-2b10-45d5-8c9f-1577a685fad6');
    foundTodo.title = 'Zrobic nalesniki';
    await foundTodo.update()

    await pool.end();
})();
