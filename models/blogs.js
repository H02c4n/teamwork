const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, require: true },
  short: { type: String, require: true },
  long: { type: String, require: true },
});

module.exports = mongoose.model("Blog", blogSchema);
