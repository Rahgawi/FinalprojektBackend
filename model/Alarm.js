const mongoose = require("mongoose");

const{Schema} = mongoose;

const Alarm= new Schema({
   
    time:{ type: Date, required: true},
    day: {type:  String},
    tune:{type:  String, required: true},
    description:{type: String}
    
});

module.exports = mongoose.model("Alarm", Alarm);