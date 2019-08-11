const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    email_address: { type: String },
    username: { type: String },
    role: { type: String },
    password: { type: String },
    location: { type: String },
    salt: { type: String },
    session_token: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});
const User = mongoose.model("User", userSchema);

module.exports = User;