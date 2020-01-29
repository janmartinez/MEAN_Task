const mongoose = require("mongoose");

module.exports = function(DB_Name) {
    mongoose.connect(`mongodb://localhost/${DB_Name}`);
    require("../models/tasks");
};