const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the database server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('ToDos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({ name: 'Kuba'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.collection('ToDos').find().count().then((count) => {
    //     console.log('Todos count');
    //     console.log(count);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.close();
});
