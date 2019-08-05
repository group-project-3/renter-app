const router = require("express").Router();
const userRoutes = require("./users");
const itemRoutes = require("./items");
const locationRoutes = require("./location");

router.use("/users", userRoutes);
router.use("/items", itemRoutes);
router.use("/locations", locationRoutes);

module.exports = router;