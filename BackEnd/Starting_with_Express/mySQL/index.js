const express = require("express");
const port = 9000;
const app = express();

const db = require("./config/database");

db.execute("SELECT * FROM employes")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

// for post requests:-
app.use(express.urlencoded());

// for js or css:-
app.use(express.static("assets"));

// for ejs tamplate:-
app.set("view engine", "ejs");
app.set("views", "./views");

// for routing:-
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("error in creating server");
    return;
  }
  console.log(`server is runing on port ${port}`);
});
