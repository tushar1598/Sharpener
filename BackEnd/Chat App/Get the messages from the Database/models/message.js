const Sequelize = require("sequelize");
const sequelize = require("../config/databse");

const Message = sequelize.define("messages", {
    message: Sequelize.STRING,
    username: Sequelize.STRING,
});

module.exports = Message;
