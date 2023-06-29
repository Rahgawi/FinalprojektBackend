const mongoose = require("mongoose");

const{Schema} = mongoose;


const User = new Schema({
    username:{type:String, required: true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required: true},
    state:{type:String, required: true},
    vacations: [{type: Schema.Types.ObjectId, ref: 'Vacation'}],
    alarms: [{type: Schema.Types.ObjectId, ref: 'Alarm'}]

    
});



module.exports = mongoose.model("User", User);