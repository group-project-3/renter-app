const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

router
    .route("/")
    .get(itemsController.findAll)

router
    .route("/:userid")
    .get(itemsController.findItemsByUserId)

router
    .route("/create")
    .post(itemsController.create)

router
    .route("/rent")
    .post(itemsController.create)

router
    .route("/return")
    .post(itemsController.create)

module.exports = router;