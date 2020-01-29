const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
        minlength: [2, "Name must be 2 characters or more"]
   },
   description: {
       type: String,
       required: true,
       minlength: [2, "Description must be 5characters or more"]

   },
   completed: {
       type: Boolean,
       default: false

   }
   
},{timestamps: true});


mongoose.model("Task", TaskSchema);