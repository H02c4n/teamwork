const rowDiv = document.querySelector(".row");

export const data = {
  questions: [],
};

rowDiv.addEventListener("click", (e) => {
  let question = rowDiv.querySelector("#question").value;
  let infoCode = rowDiv.querySelector("#info-code").value;
  let a = rowDiv.querySelector("#a").value;
  let b = rowDiv.querySelector("#b").value;
  let c = rowDiv.querySelector("#c").value;
  let d = rowDiv.querySelector("#d").value;
  let answer = rowDiv.querySelector("#answer").value;
  let teamwork = rowDiv.querySelector("#teamwork").value;

  if (e.target.classList.contains("btn")) {
    if (
      question != "" &&
      a !== "" &&
      b !== "" &&
      c !== "" &&
      d !== "" &&
      answer !== "" &&
      teamwork !== ""
    ) {
      data.questions.push({
        questionText: question,
        teamwork: teamwork,
        infoCode: infoCode,
        options: [a, b, c, d],
        answer: answer,
      });
    }
  }
  question = "";
  infoCode = "";
  a = "";
  b = "";
  c = "";
  d = "";
  answer = "";
});

console.log(data.questions);
