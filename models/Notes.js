const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
    message: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: Date,
    likes: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Note", NoteSchema);