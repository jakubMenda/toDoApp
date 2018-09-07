const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the database server');
    }

    console.log('Connected to MongoDB server');

    db.collection('ToDos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert the note');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Kuba',
        age: 25
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert a User');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});
