const User = require("../../../models/user");

module.exports.Create = function (req, res) {
  User.findAll().then((result) => {
    return res.status(200).json({
      message: "All Users!!",
      users: result,
    });
  });
};
