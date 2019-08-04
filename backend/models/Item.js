const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    item_name: { type: String },
    // item_type_id: {},
    url: {type: String},
    item_description: { type: String },
    location_id: {},
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    price: { type: Number },
    available: { type: Boolean }
});
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;