const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const config = {
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  port: process.env.PORT,
};

module.exports = { config };
