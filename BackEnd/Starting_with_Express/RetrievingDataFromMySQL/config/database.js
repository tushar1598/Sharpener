const mySql = require("mysql2");

const pool = mySql.createPool({
  host: "localhost",
  user: "root",
  password: "Tushar@123",
  database: "sharpener_schema",
});

module.exports = pool;
