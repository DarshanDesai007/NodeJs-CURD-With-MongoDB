const { MongoClient } = require("mongodb");
const { uuid } = require("uuidv4");
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);
const dbName = "test";

main()
    .then(console.log);

async function main() {
    await client.connect();
    // console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("demo");
    const Data = await collection.find({}).toArray();

    for (let i = 0; i < Data.length; i++) {
        let oldId = Data[i]._id;
        let insert = Data[i];
        insert._id = uuid();
        const updateData = await collection.insertOne(insert);
        console.log(updateData);
        const deleteData = await collection.remove({ _id: oldId });
        console.log(deleteData);
    }
    client.close();
    return "Re-insert"
    
}


