const fs = require("fs");

const content = fs.readFile("data.json", "utf-8", (err, jsonString) => {
  const data = JSON.parse(jsonString);
  console.log(data.questions[0].questionText);
});
