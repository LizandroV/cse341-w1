import { ObjectId } from "mongodb";
import dbClient from '../config/dbClient.js'

class contactsModel{
    async create(contact){
        const colContacts = dbClient.db.collection('contacts');
        return await colContacts.insertOne(contact);
    }

    async getAll(){
        const colContacts = dbClient.db.collection('contacts');
        return await colContacts.find({}).toArray();
    }

    async getOne(id){
        const ID = new ObjectId(id)
        const colContacts = dbClient.db.collection('contacts');
        return await colContacts.findOne({_id: ID});
    }

    async update(id, contact){
        const ID = new ObjectId(id)
        const colContacts = dbClient.db.collection('contacts');
        return await colContacts.updateOne({_id: ID}, {$set: contact});
    }

    async delete(id, contact){
        const ID = new ObjectId(id)
        const colContacts = dbClient.db.collection('contacts');
        return await colContacts.deleteOne({_id: ID});
    }
}

export default new contactsModel();