const express = require("express");
const port = 9000;
const app = express();
const sequelize = require("./config/database");
const User = require("./models/user");
const Appointments = require("./models/appointments");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mysql = require("mysql2");

// for cookie-parser:-
app.use(cookieParser());

// for post request:-
app.use(express.urlencoded());

// for assets:-
app.use(express.static("assets"));

// for ejs tamplate:-
app.set("view engine", "ejs");
app.set("views", "./views");

// for routing:-
app.use("/", require("./routes"));

sequelize
  .sync()
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
