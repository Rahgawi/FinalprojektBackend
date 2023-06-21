const mongoose = require("mongoose");

const{Schema} = mongoose;


const User = new Schema({
    email:{type:String, required},
    password:{type:String, required: true},
    state:{type:String, required: true}
    
});



module.exports = mongoose.model("User", User);