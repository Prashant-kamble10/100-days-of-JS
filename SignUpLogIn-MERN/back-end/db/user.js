const mongoose = require('mongoose');


// creating Schema here
const UserSchema = new mongoose.Schema({
   username : {
    type : String,
    required : true,
    unique : true 
   },
   password : {
    type : String,
    required : true
   }
})

//  creating Model here.
//  const User = mongoose.model( Collection name, Schema Name)
 const User = mongoose.model('User', UserSchema)

 module.exports = User;