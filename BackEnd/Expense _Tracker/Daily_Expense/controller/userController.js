const User = require("../models/user");
const bcrypt = require("bcrypt");
const Expense = require("../models/expense");

module.exports.Sign_up = function (req, res) {
  return res.render("sign-up", {
    title: "Sign-up",
  });
};

module.exports.Sign_in = function (req, res) {
  return res.render("sign-in", {
    title: "Sign-in",
  });
};

module.exports.Profile = function (req, res) {
  Expense.findAll().then((result) => {
    return res.render("profile", {
      title: "Profile",
      data: result,
    });
  });
};

module.exports.CreateUser = function (req, res) {
  if (req.body.Password != req.body.Confirm_Password) {
    return res.redirect("back");
  }

  bcrypt.hash(req.body.Password, 10, function (err, hash) {
    if (err) {
      console.log(err);
      return;
    }
    User.create({
      Name: req.body.Name,
      Email: req.body.Email,
      Phone: req.body.Phone,
      Password: hash,
    })
      .then((result) => {
        return res.redirect("back");
      })
      .catch((err) => {
        res.status(401).send("<h1>User already exists!!</h1>");
      });
  });
};

module.exports.CreateSession = function (req, res) {
  User.findOne({
    where: {
      Email: req.body.Email,
    },
  })
    .then((result) => {
      let password = result.dataValues.Password;
      bcrypt.compare(req.body.Password, password, (err, result) => {
        if (result) {
          return res.redirect("/users/profile");
        } else {
          return res.send("<h2>Password is invalid!!</h2>");
        }
      });
    })
    .catch((err) => {
      return res.send("<h2>username does't exist!!</h2>");
    });
};

module.exports.CreateExpense = function (req, res) {
  Expense.create(req.body).then((result) => {
    return res.redirect("back");
  });
};

module.exports.DeleteExpense = function (req, res) {
  let id = req.params.id;
  Expense.destroy({
    where: {
      id: id,
    },
  }).then((result) => {
    return res.redirect("back");
  });
};
