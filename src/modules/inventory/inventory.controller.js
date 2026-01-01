const service = require("./inventory.service");

const create = async (req, res, next) => {
  try {
    const id = await service.addItem(req.body);
    res.status(201).json({ success: true, id });
  } catch (err) {
    next(err);
  }
};

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

const increase = async (req, res, next) => {
  try {
    await service.increaseStock(req.params.id, req.body.quantity);
    res.json({ success: true, message: "Stock increased" });
  } catch (err) {
    next(err);
  }
};

const decrease = async (req, res, next) => {
  try {
    await service.decreaseStock(req.params.id, req.body.quantity);
    res.json({ success: true, message: "Stock decreased" });
  } catch (err) {
    next(err);
  }
};

module.exports = { create, getAll, increase, decrease };
