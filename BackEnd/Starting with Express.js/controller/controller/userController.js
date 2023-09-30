module.exports.Profile = function (req, res) {
  return res.render("user_profile", {
    title: "Profile Page",
  });
};
