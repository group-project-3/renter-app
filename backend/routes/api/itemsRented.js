const router = require("express").Router();
const itemsRentedController = require("../../controllers/itemsRentedController");

router
    .route("/")
    .get(itemsRentedController.findAll)

router
    .route("/:user")
    .get(itemsRentedController.findItemsRentedByUser)
    itemsRentedController
router
    .route("/rent")
    .post(itemsRentedController.rent)

router
    .route("/return")
    .post(itemsRentedController.return)

module.exports = router;