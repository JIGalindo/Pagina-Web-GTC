const mysql = require("mysql2");
const { config } = require("./config");

const database = mysql.createConnection({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  port: config.dbPort,
});

module.exports = database;
