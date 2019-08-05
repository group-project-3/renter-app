const router = require("express").Router();
const locationsController = require("../../controllers/locationsController");

router
    .route("/")
    .get(locationsController.findAll)

module.exports = router;