const mongoose = require("mongoose");
const express = require("express");
const Blog = require("../models/blogs");

const app = express();
app.set("view engine", "ejs");

app.listen(3000);

const dbURL =
  "mongodb+srv://teamwork:12345@teamwork.tjl5gwy.mongodb.net/teamwork?retryWrites=true&w=majority";

// mongoose
//   .connect(dbURL)
//   .then((result) => app.listen(3000))
//   .catch((err) => console.log(err));

// app.get("/add", (req, res) => {
//   const blog = new Blog({
//     title: "yeni",
//     short: "short",
//     long: "long",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/addquestion", (req, res) => {
  res.render("index", { title: "Add question" });
});

app.get("/", (req, res) => {
  res.render("index", { title: "Anasayfa" });
});

app.use((req, res) => {
  res.status(404).render("./404.html", { root: __dirname });
});
