const moment = require("moment");
const db = require("../models");


module.exports = {
    findAll: (request, response) => {
        db.ItemRented
            .find()
            .then(itemRentedObject => response.json(itemRentedObject))
            .catch(err => response.status(422).json(err.errors))
    },

    findItemsRentedByUser: (request, response) => {
        db.ItemRented
            .findOne({ user: request.user_id })
            .then(itemRentedObject => response.json(itemRentedObject))
            .catch(err => response.status(422).json(err.errors))
    },

    returnItem: (request, response) => {
        db.ItemRented
            .findOneAndUpdate(
                { item_id: request.body.item_id , renter_id: request.body.user_id },
                { returned: Date.now() },
                { new: true, runValidators: true })
            .then(returnedItemObject => {
                console.log("Returned Item: ", returnedItemObject.item_id)
                db.Item
                    .findOneAndUpdate(
                        { _id: request.body.item_id },
                        { available: true },
                        { new: true, runValidators: true })
                    .then(itemObject => {
                        response.json(itemObject)
                    })
                    .catch(err => {
                        console.log(err.errors)
                        response.status(422).json(err.errors)
                    })
            })
            .catch(err => response.status(422).json(err.errors))
    },

    rentItem: (request, response) => {
        db.Item
            .findOneAndUpdate(
                { _id: request.body.item_id },
                { available: false },
                { new: true, runValidators: true })
            .then(itemObject => {
                console.log("rent item: ", itemObject._id)
                let price = itemObject.price;
                let difference = moment(request.body.rented_from).from(moment(request.body.rented_to), true)[0];
                if (difference === "a") {
                    difference = 1;
                }
                let rentedObject = {
                    item_id: request.body.item_id,
                    renter_id: request.body.user_id,
                    rented_from: request.body.rented_from,
                    rented_to: request.body.rented_to,
                    returned: "",
                    price: parseFloat(price) * parseInt(difference)
                };
                db.ItemRented
                    .create(rentedObject)
                    .then(itemRentedObject => {
                        response.json(itemRentedObject)
                    })
                    .catch(err => {
                        response.status(422).json(err.errors)
                    })
            })
            .catch(err => response.status(422).json(err.errors))
    },
}



