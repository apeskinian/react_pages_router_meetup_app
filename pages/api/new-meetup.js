// /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const user = process.env.MONGO_USER
        const password = process.env.MONGO_PASSWORD
        
        const client = await MongoClient.connect(`mongodb+srv://${user}:${password}@cluster0.xj8nrk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        client.close();

        res.status(201).json({ message: 'Meetup Added!' });
    }
}

export default handler;