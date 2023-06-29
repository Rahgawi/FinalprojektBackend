const mongoose = require("mongoose");

const{Schema} = mongoose;

const Alarm= new Schema({
   
    time:{ type: String}, 
    days: {type: Array},
    tune:{type: String},
    description:{type: String}
    
});

module.exports = mongoose.model("Alarm", Alarm);