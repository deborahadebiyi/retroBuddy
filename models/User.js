const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 4,
        max: 16,
        unique: [true, "Username already in use"]
    },
    password: {
        type: String,
        require: true,
        min: 8,
        select: true
    },
    avatar: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("User", UserSchema);