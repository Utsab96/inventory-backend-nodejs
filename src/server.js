require("dotenv").config(); // ✅ MUST BE FIRST

const app = require("./app");
const db = require("./config/db");

const PORT = process.env.PORT || 5000;

db.query("SELECT 1")
  .then(() => {
    console.log("✅ Database check passed");

    app.listen(PORT, () => {
      console.log(`🚀 Inventory Service running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed", err);
    process.exit(1);
  });
