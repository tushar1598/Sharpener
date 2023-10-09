const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Appointments = sequelize.define(
  "candidates",
  {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Appointments;
