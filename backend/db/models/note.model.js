const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  text: String,
  link: String,
});

module.exports = mongoose.model("Note", noteSchema);


// Two things two create a database 
 // 1 Creating a Schema 
 // 2 creating a Model 