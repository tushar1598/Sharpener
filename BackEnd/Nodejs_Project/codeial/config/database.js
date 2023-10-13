const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("my-connection", "root", "Tushar@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
