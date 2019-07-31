const db = require("../models");

// Defining methods for the usersController
module.exports = {
    getAuthenticatedUser: (request, response) => {
        // response.json(request.user);
        response.json("return authenticated user")
    },
    login: (request, response) => {
        // response.json(request.user);
        response.json("user login");
    },
    logout: (request, response) => {
        // request.logout();
        response.send("user logged out");
    }
};