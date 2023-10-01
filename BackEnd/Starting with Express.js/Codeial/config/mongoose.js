const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/Sharpener");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting to database"));
db.once("open", function () {
  console.log("Database is connected successfully!!");
});

module.exports = db;
