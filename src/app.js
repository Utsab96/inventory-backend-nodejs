const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const inventoryRoutes = require("./modules/inventory/inventory.routes");
const { errorHandler } = require("./middlewares/error.middleware");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // ❗ REQUIRED for POST body

// test route
app.get("/test", (req, res) => {
  res.send("App working");
});

app.use("/api/inventory", inventoryRoutes);

app.use(errorHandler);

module.exports = app;
