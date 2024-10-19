const {MongoClient} = require("mongodb")

// Below code connect the mongodb compass to mongodb cluster successfully
// mongodb cluster means db is put on server and deployed on cloud. 
// before, in place of mongodb cluster we were doing it in local.

const URL = "mongodb+srv://pbkamble198:VYdDctK8GEODclbt@mongodb13.erglx.mongodb.net/"

const client = new MongoClient(URL)   // here client means mongodb cluster

const dbName = "NamasteNode"

async function main(){
    
    await client.connect();
    console.log("connected successfully to the server")
    const db = client.db(dbName)
    const collection = db.collection("User")

   

    const data = {
        firstname: 'rohit',
        lastname: 'sharma',
        city: 'mumbai'
    }

    const insertData = await collection.insertMany([data])
    console.log('insertData: ', insertData);
   
    const findResult = await collection.find({}).toArray()
    console.log('findResult: ', findResult);
    

    return "Done"
}

main().then(console.log).catch(console.error).finally(()=> client.close())