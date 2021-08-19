const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    displayname: {
        type: String,
        require: true,
        min: 4,
        max:40
    },
    status: {
        type: Boolean,
        default: false
    },
    isRetroLead: {
        type: Boolean
    },
    moodCheck: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("Profile", ProfileSchema);


