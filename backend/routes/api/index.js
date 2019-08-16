const router = require("express").Router();
const userRoutes = require("./users");
const itemRoutes = require("./items");
const locationRoutes = require("./location");
const itemRentedRoutes = require("./itemsRented");
const imageRoutes = require("./image")

router.use("/users", userRoutes);
router.use("/items", itemRoutes);
router.use("/locations", locationRoutes);
router.use("/itemsRented", itemRentedRoutes);
router.use("/image", imageRoutes);

module.exports = router;