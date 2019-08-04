var mongoose = require("mongoose");
require("dotenv").config();

const db = require("../models");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/renter-app";
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

module.exports = {
    create: (request, response) => {
        let newItem = {
            item_name: request.body.item_name,
            url: "http://via.placeholder.com/300x300",
            item_description: request.body.item_description,
            // location_id: 
            owner_id: "5d462d0e1647411259e5f070",
            price: request.body.price,
            available: true
        };
        console.log(newItem);
        db.Item
            .create(newItem)
            .then(dbModel => {
                console.log(dbModel);
                response.json(dbModel)
            })
            .catch(err => response.status(422).json(err))
        console.log("user created")
    },

    findAll: (request, response) => {
        db.Item
            .find()
            .then(dbModel => {
                console.log(dbModel);
                response.json(dbModel);
            })
            .catch(err => response.status(422).json(err))
    },

    findItemsByUserId: (request, response) => {
        console.log('get items by user');
        db.Item
            .find({ owner_id: "5d462d0e1647411259e5f070" })
            .then(dbModel => {
                console.log(dbModel);
                response.json(dbModel)
            })
            .catch(err => response.status(422).json(err))
    }
}