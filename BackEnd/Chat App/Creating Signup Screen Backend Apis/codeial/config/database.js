const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DBSCHEMA,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    dialect: "mysql",
    host: process.env.DBHOST,
  }
);
module.exports = sequelize;
