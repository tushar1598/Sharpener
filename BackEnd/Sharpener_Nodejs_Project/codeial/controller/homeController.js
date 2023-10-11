const connection = require("../config/myConnection");
const Users = require("../models/users");

module.exports.Home = function (req, res) {
  Users.findAll().then((result) => {
    let query = "SELECT * FROM book_slot";
    connection.query(query, function (err, data) {
      return res.render("home", {
        title: "Home Page",
        Data: data,
        users: result,
      });
    });
  });
};

module.exports.BookingData = function (req, res) {
  let id = req.params.id;
  let query = `SELECT * FROM book_slot where id = ${id}`;
  connection.query(query, function (err, data) {
    return res.render("BookingForm", {
      title: "Book Slot",
      Data: data,
    });
  });
};

module.exports.BookUser = async function (req, res) {
  await Users.create({
    Name: req.body.Name,
    Email: req.body.Email,
    Time: req.body.Time,
  });
  return res.redirect("/");
};
