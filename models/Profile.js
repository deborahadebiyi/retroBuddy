const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        default: false
    },
    isRetroLead: {
        type: Boolean,
        default: false
    },
    displayname: {
        type: String,
        require: true,
        min: 4,
        max: 40
    },
    moodCheck: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("Profile", ProfileSchema);


