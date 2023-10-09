const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Expense = sequelize.define(
  "expense_table",
  {
    Id: {
      type: Sequelize.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Amount: {
      type: Sequelize.INTEGER,
    },
    Category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Expense;
