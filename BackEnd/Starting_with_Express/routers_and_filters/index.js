const express = require("express");
const port = 8000;
const app = express();

app.use("/", require("./routes"));

app.use((req, res, next) => {
  return res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(port, function (err) {
  if (err) {
    console.log("error in creating a server");
    return;
  }

  console.log("server is running successfully on port :- ", port);
});
