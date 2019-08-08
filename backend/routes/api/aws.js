const router = require("express").Router();
const awsController = require("../../controllers/awsController");

router
    .route("/")
    .post(awsController.sign_s3)

module.exports = router;