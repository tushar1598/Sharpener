module.exports.Home = function (req, res) {
  return res.render("home", {
    title: "Home Page",
  });
};

module.exports.Profile = function (req, res) {
  return res.render("profile", {
    title: "Profile Page",
  });
};

module.exports.Error = function (req, res) {
  return res.status(404).render("error", {
    title: "invalid url",
  });
};
