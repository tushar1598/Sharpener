const User = require("../../../models/user");

module.exports.User = function (req, res) {
  User.findAll()
    .then((result) => {
      return res.json(200, {
        message: "user created!!",
        user: result,
      });
    })
    .catch((err) => console.log(err));
};
