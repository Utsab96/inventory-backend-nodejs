const pool = require("../src/config/db");

beforeAll(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS inventory (
      id SERIAL PRIMARY KEY,
      product_name VARCHAR(255) NOT NULL,
      sku VARCHAR(100) UNIQUE NOT NULL,
      quantity INT NOT NULL,
      price NUMERIC(10,2),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
});

afterAll(async () => {
  await pool.query("DROP TABLE IF EXISTS inventory;");
  await pool.end();
});
