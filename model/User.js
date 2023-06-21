const mongoose = require("mongoose");

const{Schema} = mongoose;


const User = new Schema({
    email:{type:String, required:true},
    password:{type:String, required: true},
    state:{type:String, required: true},
    vacations: [{type: Schema.Types.ObjectId, ref: 'Vacation'}],
    alarms: [{type: Schema.Types.ObjectId, ref: 'Alarm'}]

    
});



module.exports = mongoose.model("User", User);