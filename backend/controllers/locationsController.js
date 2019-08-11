var mongoose = require("mongoose");
require("dotenv").config();
const axios = require("axios")

const db = require("../models");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/renter-app";
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

module.exports = {
    findAll: (request, response) => {
        db.Location
            .find()
            .then(dbModel => response.json(dbModel))
            .catch(err => response.status(422).json(err))
    },
    getCurrentLocation: () => {
        axios.get('https://extreme-ip-lookup.com/json/')
            .then(function (response) {
                let currentLocation = {
                    city: response.data.city,
                    state: response.data.region,
                    country: response.data.country
                }
                console.log(currentLocation)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}