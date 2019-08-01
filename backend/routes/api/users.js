const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
    .route("/")
    .get(usersController.getAuthenticatedUser)

router
    .route("/login")
    .post(usersController.login);

router
    .route("/logout")
    .post(usersController.logout)

router
    .route("/create")
    .post(usersController.create)
    
module.exports = router;