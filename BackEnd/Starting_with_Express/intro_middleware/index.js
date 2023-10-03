const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(`<form action="/product" method="POST">
            <input type="text" name:"title" placeholder="text..">
            <input type="text" name:"email" placeholder="text..">
            <input type="submit" value="Submit">
            </form>`);
});

app.use("/product", function (req, res, next) {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", function (req, res, next) {
  res.send("<h1>Welcome in Express!!!</h1>");
});

app.listen(4000);
