const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    item_name: { type: String, required: true },
    url: { type: String, required: true },
    item_description: { type: String, required: true },
    location_id: {},
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    price: { type: Number, required: true },
    available: { type: Boolean, required: true }
});
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;