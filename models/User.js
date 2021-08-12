const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 4,
        max: 16,
        unique: true
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
        min: 8
    },
    avatar: {
        type: String,
        default: ""
    },
    status: {
        type: Boolean
    },
    isRetroLead: {
        type: Boolean
    },
    moodCheck: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("User", UserSchema);