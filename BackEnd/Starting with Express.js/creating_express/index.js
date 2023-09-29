const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware first");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware second");
  res.send("<h1>Welcome in the Another Middleware Part</h1>");
});

app.listen(3000);
