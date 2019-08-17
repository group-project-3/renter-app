const router = require("express").Router();
const userRoutes = require("./users");
const itemRoutes = require("./items");
const locationRoutes = require("./location");
const itemRentedRoutes = require("./itemsRented");

router.use("/users", userRoutes);
router.use("/items", itemRoutes);
router.use("/locations", locationRoutes);
router.use("/itemsRented", itemRentedRoutes);

module.exports = router;