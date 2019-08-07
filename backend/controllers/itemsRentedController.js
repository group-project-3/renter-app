var mongoose = require("mongoose");
require("dotenv").config();

const db = require("../models");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/renter-app";
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

module.exports = {
    findAll: (request, response) => {
        db.ItemRented
            .find()
            .then(dbModel => response.json(dbModel))
            .catch(err => response.status(422).json(err))
    },

    findItemsRentedByUser: (request, response) => {
        db.ItemRented
            .find({ user: request.user_id })
            .then(dbModel => response.json(dbModel))
            .catch(err => response.status(422).json(err))
    },

    return: (request, response) => {
        db.ItemRented
            .findOneAndUpdate(
                {_id: request.body.rented_id},
                { returned: Date.now() },
                { new: true, runValidators: true })
            .then(dbModel => {
                db.Item
                    .findOneAndUpdate(
                        {_id: request.body.item_id},
                        { available: true },
                        { new: true, runValidators: true })
                    .then(dbModel => {
                        response.json(dbModel)
                    })
                    .catch(err => response.status(422).json(err))
            })
            .catch(err => response.status(422).json(err))
    },

    rent: (request, response) => {
        db.Item
            .findOneAndUpdate(
                {_id: request.body.item_id},
                { available: false },
                { new: true, runValidators: true })
            .then(dbModel => {
                let rentedItem = createRentedObject(request.body.item_id);
                db.ItemRented
                    .create(rentedItem)
                    .then(dbModel => {
                        response.json(dbModel)
                    })
                    .catch(err => response.status(422).json(err))
            })
            .catch(err => response.status(422).json(err))
    },


}

const createRentedObject = (item_id) => {
    let now = Date.now()
    return {
        item_id: item_id,
        renter_id: request.body.user_id,
        rented_from: now,
        rented_to: now,
        returned: "",
        price: 29.99
    };
}