const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports.SignIn = function (req, res) {
  return res.render("sign-in");
};

module.exports.SignUp = function (req, res) {
  return res.render("sign-up");
};

module.exports.Profile = function (req, res) {
  return res.render("profile");
};

module.exports.Create = async function (req, res) {
  const { Name, Email, Phone, Password } = req.body;
  let password = await bcrypt.hash(Password, 10);
  let alreadyUserExist = await User.findOne({ where: { Email: Email } });
  if (!alreadyUserExist) {
    let user = await User.create({
      Name,
      Email,
      Phone,
      Password: password,
    });
    return res.status(200).json({
      message: "user created!!",
      user: user,
    });
  }
  return res.status(200).json({
    message: "user already exist!!",
  });
};

module.exports.CreateSession = async function (req, res) {
  let user = await User.findOne({ where: { Email: req.body.Email } });
  if (user) {
    let password = await bcrypt.compare(
      req.body.Password,
      user.dataValues.Password
    );
    if (password) {
      return res.status(200).json({
        message: "user data received",
        user: user.dataValues,
      });
    } else {
      return res.status(200).json({
        message: "password is wrong!!",
      });
    }
  } else {
    return res.status(200).json({
      message: "user not found",
    });
  }
};
