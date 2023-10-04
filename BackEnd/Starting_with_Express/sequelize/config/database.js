const Sequelize = require("sequelize");
const sequelize = new Sequelize("sharpener_schema", "root", "Tushar@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
