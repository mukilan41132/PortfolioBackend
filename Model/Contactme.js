const mongodb = require('../MongoDbconnection/MongoDbConnection');
const { ObjectId } = require('mongodb');

class ContactME {
    constructor(name, email, phone, message, id = null) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.message = message;
        this.id = id;
    }

    async addContactME() {

        const Record = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
        };

        try {
            const db = await mongodb.getDb();
            const collection = db.collection('Information');

            if (this.id) {
                const contactId = new ObjectId(this.id);
                await collection.updateOne({ _id: contactId }, { $set: Record });
            } else {
                await collection.insertOne(Record);
            }

            return { success: true, message: 'Operation successful' };
        } catch (error) {
            console.error('Database operation failed:', error);
            throw new Error('Database error');
        }
    }
}

module.exports = ContactME;
