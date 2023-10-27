const express = require("express");
const port = 9000;
const app = express();
const sequelize = require("./config/database");
const User = require("./models/user");
const Expense = require("./models/expense");
const passport = require("passport");
const session = require("express-session");
const PassportLocal = require("./config/passportLocalStrategy");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(express.static("assets"));

app.use(express.urlencoded());

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.set("views", "./views");

app.use(
  session({
    name: "codeial",
    secret: "something",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 100 * 60,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes"));

sequelize
  .sync()
  .then(() => {
    app.listen(port, function (err) {
      console.log(`server is running successfully on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
