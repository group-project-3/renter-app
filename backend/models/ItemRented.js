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
    rented_from: { type: Date },
    rented_to: { type: Date },
    returned: { type: Date },
    price: { type: Number }
});
const ItemRented = mongoose.model("ItemRented", itemRentedSchema);

module.exports = ItemRented;