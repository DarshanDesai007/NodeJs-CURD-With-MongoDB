const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);
const dbName = "user";

main(2)
    .then(console.log);


    // updatemain(,)
    // .then(console.log);

//get all 
async function main() {
    await client.connect();
    const collection = db.collection("user");
    const Data = await collection.find({}).toArray()
    console.log(Data);
    client.close();
}

//get by id
// async function main(a) {
//     await client.connect();
//     const collection = db.collection("user");
//     const Data = await collection.find({_id : a}).toArray()
//     client.close();
//     return "Data";
// }

//delete by id 
// async function main(a) {
//     await client.connect();
//     const collection = db.collection("user");
//     const deleteData = await collection.remove({ _id: a });
//     console.log(deleteData);
//     client.close();
//     return "hogaya";
// }

//update by id 
// async function updatemain(dbName,collection,user_id,name) {
//     await client.connect();
//     const collection = db.collection("user");
//     const updateData = await collection.updateOne();
//     console.log(updateData);
//     client.close();
//     return "hogaya";
// }







