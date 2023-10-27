const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Expense = sequelize.define(
  "expense",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Expense;
