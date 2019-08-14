const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email_address: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    role: { type: String },
    password: { type: String, required: true },
    location: { type: String, required: true },
    salt: { type: String },
    session_token: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});
const User = mongoose.model("User", userSchema);

module.exports = User;