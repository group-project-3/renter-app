var mongoose = require("mongoose");
require("dotenv").config();

const db = require("../models");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/renter-app";
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

module.exports = {
    findAll: (request, response) => {
        db.Location
            .find()
            .then(dbModel => response.json(dbModel))
            .catch(err => response.status(422).json(err))
    }
}