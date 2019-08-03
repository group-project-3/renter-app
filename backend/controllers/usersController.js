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
        db.User.findOne({ username: request.body.username })
            .then(dbModel => {
                let uuid = uuidv1()
                let userSession = {
                    session_token: uuid
                }
                console.log(dbModel)
                dbModel.session_token(uuid)
                db.User.findOneAndUpdate(username, userSession)
            })
            .catch(err => {
                response.json(err);
            });
    },
    logout: (request, response) => {
        // request.logout();
        response.send("user logged out");
    },
    create: (request, response) => {
        if (!request.body.email_address.includes("@") || !request.body.email_address.includes(".")) {
            response.status(400).json({ 'error': 'email is not valid' });
        } else if (request.body.password !== request.body.password_confirm) {
            response.status(400).json({ 'error': 'passwords do not match' });
        } else {
            let hashedPassword = hashpass(request.body.password);
            let userRequest = {
                first_name: request.body.first_name,
                last_name: request.body.last_name,
                email_address: request.body.email_address,
                username: request.body.username,
                password: hashedPassword.hash,
                salt: hashedPassword.salt
            };
            console.log(userRequest)
            db.User
                .create(userRequest)
                .then(dbModel => response.json(dbModel))
                .catch(err => response.status(422).json(err));
            console.log("user created")
        }
    }

}