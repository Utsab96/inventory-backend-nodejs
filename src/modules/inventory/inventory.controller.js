const service = require("./inventory.service");

/**
 * Create inventory item
 */
const create = async (req, res, next) => {
  try {
    const id = await service.addItem(req.body);
    res.status(201).json({ success: true, id });
  } catch (err) {
    next(err);
  }
};

/**
 * Get all inventory items
 */
const getAll = async (req, res, next) => {
  try {
    const items = await service.listInventory();
    res.json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get inventory item by ID
 */
const getById = async (req, res, next) => {
  try {
    const item = await service.getItemById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found"
      });
    }

    res.json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

/**
 * Increase stock
 */
const increase = async (req, res, next) => {
  try {
    await service.increaseStock(req.params.id, req.body.quantity);
    res.json({ success: true, message: "Stock increased" });
  } catch (err) {
    next(err);
  }
};

/**
 * Decrease stock
 */
const decrease = async (req, res, next) => {
  try {
    await service.decreaseStock(req.params.id, req.body.quantity);
    res.json({ success: true, message: "Stock decreased" });
  } catch (err) {
    next(err);
  }
};

/**
 * Delete inventory item
 */
const remove = async (req, res, next) => {
  try {
    await service.deleteItem(req.params.id);
    res.json({ success: true, message: "Item deleted" });
  } catch (err) {
    next(err);
  }
};

/**
 * Get low stock items
 */
const lowStock = async (req, res, next) => {
  try {
    const items = await service.getLowStockItems();
    res.json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  increase,
  decrease,
  remove,
  lowStock
};
