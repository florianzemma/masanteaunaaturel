let mongoose = require('mongoose')

let practicienSchema = mongoose.Schema({
    
    Name:String,
    email :String,
    password: String,
    Tel :String,
    Arr:String,
    lat: Number,
    lon : Number,
    spec: String,
    numAdeli:Number,
    url : String,
    price : String,
    detailprice: String
   
   });
   
  
   let practicienModel = mongoose.model('praticiens', practicienSchema);
  
  
   module.exports = practicienModel;