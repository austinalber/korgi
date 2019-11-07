const router = require("express").Router();
const userRoutes = require("./users");
const cardRoutes = require("./cards");

// Book routes
router.use("/users", userRoutes);
router.use("/cards", cardRoutes);

module.exports = router;
