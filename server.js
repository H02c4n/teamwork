"use strict";
import { data } from "./getquestion.js";
import { appendFile } from "node:fs";

const jsonData = JSON.stringify(data);

appendFile("data.json", jsonData, "utf-8", (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
