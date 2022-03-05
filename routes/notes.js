const router = require("express").Router();
const Notes = require("../models/Notes")

const addNote = (message)=>{
    if(message.length != 0) {
        return true
    }
    return false
}

router.post("/notes/add",async (req,res)=>{
    try {
        const note = await new Note({
            message: req.body.message,
            owner: req.body.owner,
            date: new Date(),
            likes: req.body.likes
        })

        await note.save((err)=>{
            if(err) {
                res.status(400).send("Unable to create note")
                console.log('Unable to add note');
            } else {
                res.send(201)
                console.log("New note added");
            } 
        })
    } catch(err) {
        res.status(500).send("Please try adding note again")
    }
})

module.exports = addNote 