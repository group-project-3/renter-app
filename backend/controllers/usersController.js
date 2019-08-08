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
            .then(userModel => {
                let passwordEntered = hashpass(request.body.password, userModel.salt);
                if (passwordEntered.hash === userModel.password) {
                    let uuid = uuidv1();
                    db.User.findOneAndUpdate({ "username": request.body.username }, { "session_token": uuid })
                        .then(userModel => {
                            userModel.password = undefined
                            userModel.salt = undefined
                            userModel.session_token = undefined
                            response.header('x-session-token', uuid).status(200).json(userModel);
                        })
                        .catch(err => response.status(422).json(err))
                } else {
                    response.json("Invalid username or password");
                }
            })
            .catch(err => response.status(422).json(err))
    },
    logout: (request, response) => {
        db.User.findOne({ username: request.body.username })
            .then(dbModel => {
                let uuid = uuidv1()
                console.log(uuid)
                db.User.updateOne({ "username": request.body.username }, { $set: { "session_token": "" } },
                    function (error, edited) {
                        if (error) {
                            console.log(error);
                            response.send(error);
                        }
                        else {
                            console.log("user logged out");
                            response.send(edited);
                        }
                    })
            })
            .catch(err => {
                response.json(err);
            });
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
                salt: hashedPassword.salt,
                session_token: ""
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