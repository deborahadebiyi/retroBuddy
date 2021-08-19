const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 4,
        max: 16,
        unique: [true, "Username already in use"]
    },
    displayname: {
        type: String,
        require: true,
        min: 4,
        max: 40
    },
    password: {
        type: String,
        require: true,
        min: 8,
        select: false
    },
    avatar: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("User", UserSchema);