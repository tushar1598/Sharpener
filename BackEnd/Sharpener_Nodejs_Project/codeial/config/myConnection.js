const mySql = require("mysql2");

const connection = mySql.createPool({
  host: "localhost",
  user: "root",
  password: "Tushar@123",
  database: "sharpener_schema",
});

module.exports = connection;
