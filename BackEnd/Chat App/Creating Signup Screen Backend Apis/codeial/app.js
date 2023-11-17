const express = require("express");
const port = 9000;
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const User = require("./models/user");

require("dotenv").config();

// post requests:-
app.use(bodyParser.json());

// for static files:-
app.use(express.static("assets"));

// for view engine:-
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.set("views", "./views");

// for routing:-
app.use("/", require("./routes"));

sequelize
  .sync()
  .then(() => {
    app.listen(port, function () {
      console.log(`server is running successfully on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
