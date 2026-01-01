const pool = require("../../config/db");

// CREATE
const createItem = async ({ product_name, sku, quantity, price }) => {
  const { rows } = await pool.query(
    `INSERT INTO inventory (product_name, sku, quantity, price)
     VALUES ($1, $2, $3, $4)
     RETURNING id`,
    [product_name, sku, quantity, price]
  );
  return rows[0].id;
};

// READ ALL
const getAllItems = async () => {
  const { rows } = await pool.query("SELECT * FROM inventory ORDER BY id");
  return rows;
};

// READ BY ID
const getItemById = async (id) => {
  const { rows } = await pool.query(
    "SELECT * FROM inventory WHERE id = $1",
    [id]
  );
  return rows[0];
};

// UPDATE STOCK
const updateStock = async (id, qty) => {
  await pool.query(
    "UPDATE inventory SET quantity = quantity + $1 WHERE id = $2",
    [qty, id]
  );
};

// DELETE
const deleteItem = async (id) => {
  await pool.query("DELETE FROM inventory WHERE id = $1", [id]);
};

// LOW STOCK
const getLowStockItems = async () => {
  const { rows } = await pool.query(
    "SELECT * FROM inventory WHERE quantity < 5"
  );
  return rows;
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateStock,
  deleteItem,
  getLowStockItems
};
