const repo = require("./inventory.repository");

const addItem = (data) => repo.createItem(data);
const listInventory = () => repo.getAllItems();
const getItemById = (id) => repo.getItemById(id);
const deleteItem = (id) => repo.deleteItem(id);
const getLowStockItems = () => repo.getLowStockItems();

const increaseStock = (id, qty) => {
  if (!qty || qty <= 0) {
    throw new Error("Quantity must be positive");
  }
  return repo.updateStock(id, qty);
};

const decreaseStock = (id, qty) => {
  if (!qty || qty <= 0) {
    throw new Error("Quantity must be positive");
  }
  return repo.updateStock(id, -qty);
};

module.exports = {
  addItem,
  listInventory,
  getItemById,
  deleteItem,
  getLowStockItems,
  increaseStock,
  decreaseStock
};
