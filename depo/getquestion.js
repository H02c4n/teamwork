const rowDiv = document.querySelector(".row");

export const data = {
  questions: [],
};

// rowDiv.addEventListener("click", (e) => {
//   let questionText = rowDiv.querySelector("#question").value;
//   let infoCode = rowDiv.querySelector("#info-code").value;
//   let a = rowDiv.querySelector("#a").value;
//   let b = rowDiv.querySelector("#b").value;
//   let c = rowDiv.querySelector("#c").value;
//   let d = rowDiv.querySelector("#d").value;
//   let answer = rowDiv.querySelector("#answer").value;
//   let teamwork = rowDiv.querySelector("#teamwork").value;

//   if (e.target.classList.contains("btn")) {
//     if (
//       questionText != "" &&
//       a !== "" &&
//       b !== "" &&
//       c !== "" &&
//       d !== "" &&
//       answer !== "" &&
//       teamwork !== ""
//     ) {
//       data.questions.push({
//         questionText: questionText,
//         teamwork: teamwork,
//         infoCode: infoCode,
//         options: [a, b, c, d],
//         answer: answer,
//       });
//     }
//   }
//   questionText = "";
//   infoCode = "";
//   a = "";
//   b = "";
//   c = "";
//   d = "";
//   answer = "";
// });

function handleFormSubmit(event) {
  event.preventDefault();

  const veri = new FormData(event.target);

  const formJSON = Object.fromEntries(veri.entries());

  //console.log({ formJSON });

  data.questions.push(JSON.stringify(formJSON, null, 2));
}

const form = document.querySelector(".send-question");

form.addEventListener("submit", handleFormSubmit);
