const express = require("express");
const router = express.Router();

const controller = require("./inventory.controller");

router.post("/", controller.create);
router.get("/", controller.getAll);
router.patch("/:id/increase", controller.increase);
router.patch("/:id/decrease", controller.decrease);

module.exports = router;
