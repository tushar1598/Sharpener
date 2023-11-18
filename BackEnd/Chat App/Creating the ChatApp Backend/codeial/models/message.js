const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Message = sequelize.define("message", {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Message;
