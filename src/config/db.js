const { Pool } = require("pg");
require("dotenv").config();

const dbName =
  process.env.NODE_ENV === "test"
    ? process.env.DB_NAME_TEST
    : process.env.DB_NAME;


const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: dbName,
});

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("TYPE:", typeof process.env.DB_PASSWORD);


pool.on("connect", () => {
  console.log("✅ PostgreSQL connected");
});

module.exports = pool;
