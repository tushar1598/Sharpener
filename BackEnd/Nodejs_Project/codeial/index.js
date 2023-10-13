const express = require("express");
const port = 8000;
const app = express();
// const sequelize = require("./config/database");

const db = require("./config/myConnection");

// for assets :-
app.use(express.static("assets"));

// for post request:-
app.use(express.urlencoded());

// for ejs tamplate:-
app.set("view engine", "ejs");
app.set("views", "./views");

// for routes:-
app.use("/", require("./routes"));

// sequelize
//   .sync()
//   .then((result) => {
//     app.listen(port);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(port, function (err) {
  console.log(`server is running successfully on port ${port}`);
});
