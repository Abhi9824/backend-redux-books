const mongoose = require("mongoose");

const bookiesSchema = new mongoose.Schema({
  bookName: String,
  author: String,
  genre: String,
});

const Bookies = mongoose.model("Bookies", bookiesSchema);

module.exports = { Bookies };
