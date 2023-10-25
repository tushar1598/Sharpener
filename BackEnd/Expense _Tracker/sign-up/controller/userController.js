const User = require("../models/user");

module.exports.Sign_up = function (req, res) {
  return res.render("sign-up", {
    title: "Sign-up",
  });
};

module.exports.CreateUser = function (req, res) {
  if (req.body.Password != req.body.Confirm_Password) {
    return res.redirect("back");
  }
  User.create(req.body)
    .then((result) => {
      return res.redirect("back");
    })
    .catch((err) => {
      return res.redirect("back");
    });
};
