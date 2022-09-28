const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: { type: String },
  infoCode: { type: String },
  a: { type: String },
  b: { type: String },
  c: { type: String },
  d: { type: String },
  answer: { type: String },
  teamwork: { type: String },
});

module.exports = mongoose.model("QuestionSchema", questionSchema);
