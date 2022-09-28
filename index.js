var express = require("express");

var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Blog = require("./models/blogs");
var QuestionSchema = require("./models/question.js");
var app = express();

var dbURl =
  "mongodb+srv://teamwork:12345@teamwork.tjl5gwy.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURl, (err) => {
  if (!err) {
    console.log("Connected to DB");
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/add", (req, res) => {
  QuestionSchema.create(req.body);
  res.redirect("/");
  // var questionData = req.body;
  // var question = new QuestionSchema(questionData);
  // question.save((err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).send({ message: error });
  //   }
  //   res.status(201);
  // });
});

//   .then((result) => console.log("connected to DB"))
//   .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.listen(3000);
app.use(express.static("public"));
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.sendFile("./views/index.html", { root: __dirname });
// });

// app.get("/about", (req, res) => {
//   res.sendFile("./views/about.html", { root: __dirname });
// });

// app.get("/about-us", (req, res) => {
//   res.redirect("./about");
// });

// app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// });

app.get("/", (req, res) => {
  QuestionSchema.find().then((posts) => {
    res.render("index", { title: "Homepage", posts: posts });
  });
  // res.render("index", { title: "Homepage" });
});

app.get("/new/:id", (req, res) => {
  QuestionSchema.findById(req.params.id).then((question) => {
    console.log(question);
    // res.render("index", { title: "Homepage", question: question });
  });
});
app.get("/add-question", (req, res) => {
  res.render("add-question", { title: "Add new Question" });
});

app.use((req, res) => {
  res.render("404", { title: "Page not found" });
});
