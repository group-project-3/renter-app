const router = require("express").Router();
const userRoutes = require("./users");
const itemRoutes = require("./items");
const awsRoutes = require("./aws");

router.use("/users", userRoutes);
router.use("/items", itemRoutes);
router.use("/aws", awsRoutes);

module.exports = router;
