const {TodoRepository} = require("./repositories/todo.repository");
const {pool} = require("./utills/db");


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

    const foundTodo = await TodoRepository.find('f0935dab-2b10-45d5-8c9f-1577a685fad6')
    console.log(foundTodo)
    await TodoRepository.delete(foundTodo);


    await pool.end();
})();
