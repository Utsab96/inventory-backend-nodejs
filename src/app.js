const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const inventoryRoutes = require("./modules/inventory/inventory.routes");
const { errorHandler } = require("./middlewares/error.middleware");
const swagger = require("../src/docs/swagger");



dotenv.config();

const app = express();

swagger(app);

app.use(cors());
app.use(express.json()); // ❗ REQUIRED for POST body

// error middleware
app.use(errorHandler);

// test route
app.get("/test", (req, res) => {
  res.send("App working");
});

app.use("/api/inventory", inventoryRoutes);

app.use(errorHandler);

module.exports = app;
