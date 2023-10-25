const express = require("express");
const port = 9000;
const app = express();
const sequelize = require("./config/database");
const User = require("./models/user");

app.use(express.static("assets"));

app.use(express.urlencoded());

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.set("views", "./views");

app.use("/", require("./routes"));

sequelize
  .sync()
  .then((result) => {
    app.listen(port, function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`server is running successfully on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
