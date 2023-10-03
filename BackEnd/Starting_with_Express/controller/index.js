const express = require("express");
const port = 9000;
const app = express();

app.use(express.static("assets"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("error in creating serevr");
    return;
  }
  console.log("server is running on port :- ", port);
});
