const db = require("../../config/db");

const createItem = async ({ product_name, sku, quantity, price }) => {
  const result = await db.query(
    `INSERT INTO inventory (product_name, sku, quantity, price)
     VALUES ($1, $2, $3, $4)
     RETURNING id`,
    [product_name, sku, quantity, price]
  );

  return result.rows[0].id;
};

const getAllItems = async () => {
  const result = await db.query("SELECT * FROM inventory ORDER BY id DESC");
  return result.rows;
};

const updateStock = async (id, quantity) => {
  await db.query(
    "UPDATE inventory SET quantity = quantity + $1 WHERE id = $2",
    [quantity, id]
  );
};

module.exports = {
  createItem,
  getAllItems,
  updateStock
};
