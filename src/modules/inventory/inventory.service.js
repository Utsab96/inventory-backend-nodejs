const repo = require("./inventory.repository");

const addItem = async (data) => {
  return await repo.createItem(data);
};

const listInventory = async () => {
  return await repo.getAllItems();
};

const increaseStock = async (id, qty) => {
  if (qty <= 0) throw new Error("Quantity must be positive");
  await repo.updateStock(id, qty);
};

const decreaseStock = async (id, qty) => {
  if (qty <= 0) throw new Error("Quantity must be positive");
  await repo.updateStock(id, -qty);
};

module.exports = {
  addItem,
  listInventory,
  increaseStock,
  decreaseStock
};
