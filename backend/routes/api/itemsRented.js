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
    .route("/rentItem")
    .post(itemsRentedController.rentItem)

router
    .route("/returnItem")
    .post(itemsRentedController.returnItem)

module.exports = router;