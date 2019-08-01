var mongoose = require("mongoose");
const hashpass = require('hashpass');
const uuidv1 = require('uuid');
require("dotenv").config();

const db = require("../models");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/renter-app";
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

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
    },
    create: (request, response) => {
        response.json("return created user")
    }
};