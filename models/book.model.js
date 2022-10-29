const mongoose = require("mongoose");
const authorModel = require("./author.model");

const bookSchema = new mongoose.Schema({
  name: { type: String, require: true },
  isbn: { type: Number, require: true, unique: true },
  author: [{ type: mongoose.Schema.Types.ObjectId, ref: "Author" }],
});

module.exports = mongoose.model("Book", bookSchema);
