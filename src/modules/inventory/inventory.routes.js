const express = require("express");
const router = express.Router();

const controller = require("./inventory.controller");

router.post("/", controller.create);
router.get("/", controller.getAll);
router.patch("/:id/increase", controller.increase);
router.patch("/:id/decrease", controller.decrease);

router.get("/low-stock", controller.lowStock); // 🔥 FIRST
router.get("/:id", controller.getById);        // 🔥 LAST
router.delete("/:id", controller.remove);      // 🔥 LAST


module.exports = router;
