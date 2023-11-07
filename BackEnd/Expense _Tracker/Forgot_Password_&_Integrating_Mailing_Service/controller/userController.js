const User = require("../models/user");
const bcrypt = require("bcrypt");
const Expense = require("../models/expense");


module.exports.SignUP = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("sign_up");
};

module.exports.SignIN = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("sign_in");
};

module.exports.Profile = async function (req, res) {
  let expense = await Expense.findAll();
  return res.render("profile", {
    expense: expense,
  });
};

module.exports.CreateUser = async function (req, res) {
  const { name, email, phone, password } = req.body;
  let hash = await bcrypt.hash(password, 10);
  let user = await User.create({
    name,
    email,
    phone,
    password: hash,
    ispremiumuser: "false",
  });
  return res.status(201).json({
    message: "user created!!",
    user: user,
  });
};

// module.exports.CreateSession = async function (req, res) {
//   let user = await User.findOne({ where: { email: req.body.email } });
//   if (user) {
//     let result = await bcrypt.compare(
//       req.body.password,
//       user.dataValues.password
//     );
//     if (result) {
//       return res.status(200).json({
//         message: "user found successfully!!",
//         user: user.dataValues,
//       });
//     } else {
//       return res.json(200, {
//         message: "password is invalid",
//       });
//     }
//   } else {
//     return res.json(200, {
//       message: "user is not found",
//     });
//   }
// };

module.exports.CreateSession = async function (req, res) {
  return res.redirect("/users/profile");
};

module.exports.Destroy = function (req, res) {
  req.logout(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    return res.redirect("/users/sign-in");
  });
};
