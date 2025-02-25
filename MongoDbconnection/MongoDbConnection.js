const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

let MongoDBConnection;

async function MongodbConnection() {

    const client = await mongoClient.connect('mongodb://localhost:27017');
    MongoDBConnection = client.db('ContactME');

}

function getDb() {
    if (!MongoDBConnection) {
        throw new Error('Connect Mongodb')
    }
    return MongoDBConnection;
}

module.exports = {
    MongodbConnection: MongodbConnection,
    getDb: getDb
}

