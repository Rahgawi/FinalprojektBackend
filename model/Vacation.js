const mongoose = require("mongoose");

const{Schema} = mongoose;

const Vacation = new Schema({
    description:{type: String, required:true},
    start_date:{type:  Date, reuqired:true},
    end_date:{type:   Date, required: true}
    
});

module.exports = mongoose.model("Vacation", Vacation);