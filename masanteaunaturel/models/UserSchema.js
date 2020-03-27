let mongoose = require('mongoose')

let praticienSelectedSchema = mongoose.Schema({
    name :String,
    spec :String,
    Arr : String,
    tel : String,
    lat : Number,
    lon : Number,
    url: String
})

let userSchema = mongoose.Schema({
    name:String,
    email :String,
    password: String,
    salt: String,
    praticienSelected : [praticienSelectedSchema]
   
   });
   
  
   let userModel = mongoose.model('users', userSchema);
  
  
   module.exports = userModel;