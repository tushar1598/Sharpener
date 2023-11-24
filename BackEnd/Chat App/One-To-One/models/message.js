const Sequelize = require("sequelize");
const sequelize = require("../config/databse");

const Message = sequelize.define("messages", {
    message: Sequelize.STRING,
    from: Sequelize.STRING,
    to: Sequelize.STRING,
    username: Sequelize.STRING,
});

module.exports = Message;
