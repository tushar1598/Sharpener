const User = require("../models/user");
const Appointments = require("../models/appointments");

module.exports.Home = function (req, res) {
  return res.render("home", {
    title: "Home Page",
  });
};

module.exports.Profile = async function (req, res) {
  let Id = req.cookies.user_id;
  let user = await User.findOne({ id: Id });
  if (user.id != Id) {
    return res.redirect("/sign-in");
  }
  return res.render("profile", {
    title: "Profile Page",
  });
};

module.exports.SignIn = async function (req, res) {
  let Id = req.cookies.user_id;
  let user = await User.findOne({ id: Id });
  if (user.id != Id) {
    return res.render("sign_in", {
      title: "sign-in",
    });
  }
  return res.redirect("/profile");
};

module.exports.SignUp = async function (req, res) {
  let Id = req.cookies.user_id;
  let user = await User.findOne({ id: Id });
  if (user.id != Id) {
    return res.render("sign_up", {
      title: "sign-up",
    });
  }
  return res.redirect("/profile");
};

module.exports.Create = async function (req, res) {
  // let query = `INSERT INTO users (id,name,email,password) VALUES ("${req.body.name}","${req.body.email}","${req.body.password}")`;
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  } else {
    await User.create(req.body);
    return res.redirect("/sign-in");
  }
};

module.exports.CreateSession = async function (req, res) {
  let user = await User.findOne({ email: req.body.email });
  if (user.password != req.body.password) {
    return res.redirect("back");
  }
  res.cookie("user_id", user.id);
  return res.redirect("profile");
};

module.exports.CreateAppointment = async function (req, res) {
  let data = await Appointments.findOne({ email: req.body.email });
  if (data.email == req.body.email || data.phone == req.body.phone) {
    return res.redirect("back");
  }
  await Appointments.create(req.body);
  return res.redirect("back");
};

module.exports.Candidates = function (req, res) {
  Appointments.findAll()
    .then((result) => {
      return res.render("candidates", {
        title: "Candidates",
        data: result,
      });
    })
    .catch((err) => console.log(err));
};

module.exports.Destroy = function (req, res) {
  res.clearCookie("user_id");
  return res.redirect("/sign-in");
};

module.exports.Delete = function (req, res) {
  let email = req.params.email;

  Appointments.findOne({ email: email })
    .then((data) => {
      return data.destroy();
    })
    .then((result) => {
      return res.redirect("back");
    })
    .catch((err) => console.log(err));
};
