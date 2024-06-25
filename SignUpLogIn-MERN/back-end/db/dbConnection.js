const mongoose = require('mongoose');     // mongoose is used for connecting nodejs with mongodb


// creating logic for connection of MongoDB with nodejs
console.log("waiting to connect with mongodb")



const connectDB =  async () =>{
      try{
        await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
        // await mongoose.connect("mongodb://localhost:27017/mydatabase");
        console.log("connected to MongoDB");
      }catch(error){
      console.log("Failed while connecting to MongoDB", error)
      }
}

module.exports = connectDB;