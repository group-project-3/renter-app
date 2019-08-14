const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemRentedSchema = new Schema({
    item_id: {
        type: Schema.Types.ObjectId,
        ref: "Item"
    },
    renter_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    rented_from: { type: Date, required: true },
    rented_to: { type: Date, required: true },
    returned: { type: Date, required: true },
    price: { type: Number, required: true }
});
const ItemRented = mongoose.model("ItemRented", itemRentedSchema);

module.exports = ItemRented;