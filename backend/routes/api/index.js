const router = require("express").Router();
const userRoutes = require("./users");
const itemRoutes = require("./items");
const awsRoutes = require("./aws");
const locationRoutes = require("./location");

router.use("/users", userRoutes);
router.use("/items", itemRoutes);
router.use("/aws", awsRoutes);
router.use("/locations", locationRoutes);

module.exports = router;