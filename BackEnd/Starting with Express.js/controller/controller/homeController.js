module.exports.Home = function (req, res) {
  return res.render("home", {
    title: "Home Page",
  });
};
