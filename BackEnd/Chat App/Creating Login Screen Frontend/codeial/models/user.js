const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("user", {
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  Phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
