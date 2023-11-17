const User = require("../models/user");

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
  let user = await User.create({
    Name,
    Email,
    Phone,
    Password,
  });
  return res.status(200).json({
    message: "user created!!",
    user: user,
  });
};

module.exports.CreateSession = async function (req, res) {
  let user = await User.findOne({ where: { Email: req.body.Email } });

  if (user) {
    return res.status(200).json({
      message: "user data received",
      user: user.dataValues,
    });
  }
  return res.status(200).json({
    message: "user not found",
  });
};
