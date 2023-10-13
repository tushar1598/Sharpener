const mySql = require("mysql2");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tushar@123",
  database: "my-connection",
});

module.exports = connection;
