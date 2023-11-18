const Message = require("../models/message");

module.exports.Home = async function (req, res) {
  let message = await Message.findAll();
  return res.render("home", {
    message: message,
  });
};
