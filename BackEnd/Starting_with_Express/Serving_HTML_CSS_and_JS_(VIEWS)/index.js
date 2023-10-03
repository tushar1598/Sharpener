const express = require("express");
const port = 8000;
const app = express();

app.use(express.urlencoded());

app.use(express.static("assets"));

app.set("view engine", "ejs");
app.set("views", "./views");

// app.use((req, res, next) => {
//   res.status(401).send("<h1>Something went wrong!!</h1>");
// });

// app.use((req, res, next) => {
//   res.status(404).render("error", { message: "Page not found" });
// });

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("error in creating server");
    return;
  }
  console.log(`server is running on port ${port}`);
});
