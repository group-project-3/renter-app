const mongoose = require("mongoose");
require("dotenv").config();

const db = require("../models");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/renter-app";
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

console.log('Seeding Users...');
const userSeed = [
    {
        first_name: "test",
        last_name: "user",
        email_address: "testuser@bootcamp.com",
        password: "test",
        salt: "",
        session_token: "",
        created: new Date(Date.now()),
        updated: new Date(Date.now())
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
