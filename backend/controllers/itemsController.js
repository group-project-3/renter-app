var mongoose = require("mongoose");
require("dotenv").config();

const db = require("../models");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/renter-app";
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

module.exports = {
    create: (request, response) => {
        console.log(request.body)
        //"http://via.placeholder.com/300x300"
        let newItem = {
            item_name: request.body.item_name,
            url: request.body.url,
            item_description: request.body.item_description,
            location_id: request.body.location_id,
            owner_id: "5d462d0e1647411259e5f070",
            price: request.body.price,
            available: true
        };
        db.Item
            .create(newItem)
            .then(dbModel => {
                response.json(dbModel)
            })
            .catch(err => response.status(422).json(err))
    },

    findAll: (request, response) => {
        db.Item
            .find()
            .then(dbModel => {
                response.json(dbModel);
            })
            .catch(err => response.status(422).json(err))
    },

    findItemsByUserId: (request, response) => {
        db.Item
            .find({ owner_id: "5d462d0e1647411259e5f070" })
            .then(dbModel => {
                response.json(dbModel)
            })
            .catch(err => response.status(422).json(err))
    }
}