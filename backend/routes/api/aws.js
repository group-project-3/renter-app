const router = require("express").Router();
const awsController = require("../../controllers/awsController");

router
    .route("/upload")
    .post(awsController.sign_s3)

module.exports = router;