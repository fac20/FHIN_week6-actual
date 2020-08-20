const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const dataBaseURL = process.env.DATABASE_URL;

if (!dataBaseURL) {
    console.error()
  };

const options = {
    connectionString: dataBaseURL
  };
const db = new pg.Pool(options);

db.query("SELECT * FROM users").then((result) => result.rows);

module.exports = db;