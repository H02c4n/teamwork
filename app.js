const Question = function (text, infoCode, options, answer) {
  this.text = text;
  this.infoCode = infoCode;
  this.options = options;
  this.answer = answer;
};

Question.prototype.checkAnswer = function (answer) {
  return this.answer == answer;
};

const Ask = function (questions) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;
};

Ask.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

Ask.prototype.lastQuestion = function () {
  return this.questions.length === this.questionIndex;
};

Ask.prototype.answer = function (answer) {
  let question = this.getQuestion();

  if (question.checkAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
};
