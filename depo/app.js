import { data } from "./getquestion.js";

const Question = function (questionText, teamwork, infoCode, options, answer) {
  this.questionText = questionText;
  this.teamwork = teamwork;
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

Ask.prototype.answerQuestion = function (answer) {
  let question = this.getQuestion();

  if (question.checkAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
};

data.questions.forEach((question) => {
  let soru1 = new Question(
    question.questionText,
    question.teamwork,
    question.infoCode,
    question.options,
    question.answer
  );
  console.log(soru1);
});

console.log(Object.values(data.questions));
