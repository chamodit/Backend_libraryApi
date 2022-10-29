const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  authorId: { type: String, require: true, unique: true },
  fname: { type: String, require: true },
  lname: { type: String, require: true },
});

module.exports = mongoose.model("Author", authorSchema);
