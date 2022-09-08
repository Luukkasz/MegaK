const mysql = require('mysql2/promise');
const {v4: uuid} = require('uuid');

(async() => {
    const pool = await mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'megak_courses',
        decimalNumbers: true,
        namedPlaceholders: true,
    });

    // Pobranie i wyswietlenie wszystkich kursów
    const [courses] = await pool.execute('SELECT * FROM `courses`');
    console.log(courses);

    // Wybranie wszystkich kursantow min 18 lat i nazwy kursow na jakich sa
    const [studentsAndCourses] = await pool.execute('SELECT `students`.`id`, `students`.`firstName`, `students`.`lastName`, `courses`.`name` FROM `students` JOIN `students_courses` ON `students`.`id` = `students_courses`.`studentId` JOIN `courses` ON `students_courses`.`courseName` = `courses`.`name` WHERE `students`.`age` >= 18');
    console.log(studentsAndCourses);

    // Usuniecie niepelnoletnich + wyswietlenie ilu usunelismy
    const {affectedRows: deletedStudentsUnder18} = (await pool.execute('DELETE FROM `students` WHERE `age` < :age', {age: 18}))[0];
    console.log(deletedStudentsUnder18)


    // Dodajemy nowe kursanta i wyswietlamy jego ID
    const newStudentId = uuid();

   await pool.execute('INSERT INTO `students`(`id`, `firstName`, `lastName`, `age`, `addressStreet`) VALUES(:id, :firstName, :lastName, :age, :addressStreet);', {
        id: newStudentId,
        firstName: 'Jakubina',
        lastName: 'Jakubowska',
       age: 100,
       addressStreet: 'ul. Toruńsja 77'});

    console.log(newStudentId)

    await pool.end();
})();
