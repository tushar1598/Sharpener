const express = require("express");
const app = express();
const BodyParser = require("body-parser");

app.use(BodyParser.urlencoded({ extended: false }));

app.use("/login", (req, res, next) => {
  return res.send(`<form action="/create" method="POST"  onsubmit="localStorage.setItem("username",       document.getElementById("username").value)">
              <input type="text" name="name" id="username" placeholder="username">
              <input type="submit" value="send">
            </form>`);
});

app.use("/create", (req, res, next) => {
  res.redirect("/login");
});

app.use((req, res, next) => {
  res.send("<h1>Chat Data</h1>");
});

app.listen(5000);
