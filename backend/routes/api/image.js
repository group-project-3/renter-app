const router = require("express").Router();
const imageController = require("../../controllers/imagecontroller");

router
    .route("/")
    .post(imageController.imageUpload)

module.exports = router;