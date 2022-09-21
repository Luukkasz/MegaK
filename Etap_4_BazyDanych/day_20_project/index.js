const mongo = require("mongodb");

const client = new mongo.MongoClient('mongodb://localhost:27017');

(async () => {
    await client.connect()
    console.log('Baza połączona');

    const db = client.db('megak_music2');
    // const users = db.collection('users');
    // const foundUsers = users.find();
    // for await (const user of db.collection('users').findOne()) {
    //     console.log(user)
    // }

    // await db.createCollection('songs');

    // const songs = [
    //     {
    //         title: 'siasiasia',
    //         artist: 'yyyyy',
    //         length: 300,
    //     },
    //     {
    //         title: 'siasiasia',
    //         artist: 'yyyyy',
    //         length: 5000,
    //     },
    //     {
    //         title: 'zzzz',
    //         artist: 'testowy',
    //         length: 450,
    //     },
    // ]

    // await db.collection('songs').insertMany(songs);


    console.log('All songs')

    for await (const song of db.collection('songs').find()) {
        console.log(song);
    }


    console.log('All songs by testowy')

    for await (const song of db.collection('songs').find({
        artist: 'testowy',
    })) {
        console.log(song);
    }



    await client.close();
})();

