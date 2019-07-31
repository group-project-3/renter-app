const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../controllers/passportController");

console.log('user.js');
router
    .route("/")
    .get(userController.getAuthenticatedUser)

router
    .route("/login")
    .post(passport.authenticate("local"), userController.login);

router
    .route("/logout")
    .post(userController.logout)

router
    .route("/test")
    .get(userController.test)
module.exports = router;