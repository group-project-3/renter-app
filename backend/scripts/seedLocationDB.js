const mongoose = require("mongoose");
require("dotenv").config();

const db = require("../models");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/renter-app";
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

console.log('Seeding Loations...');
const locationSeed = [
    {
        // zip_code: 60406,
        city_name: "Blue Island"
    },
    {
        // zip_code: 60605,
        city_name: "Chicago"
    }
];

db.Location
    .remove({})
    .then(() => db.Location.collection.insertMany(locationSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
