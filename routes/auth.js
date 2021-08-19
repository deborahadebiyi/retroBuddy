const router = require("express").Router();
const User = require("../models/User");
const authController = require("../controllers/auth");
const bcrypt =  require("bcrypt");
const saltRounds = 10;

//REGISTER
router.post("/register", async(req,res)=>{
    try{
        //hash password
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        console.log(salt);
        console.log(hashedPassword);

        //creates new participant
        const user = await new User({
            username: req.body.username,
            displayname: req.body.displayname,
            password: hashedPassword,
            avatar: req.body.avatar
        })
        
        //saves participant to db and returns response
        await user.save((err)=>{
            if(err) {
                console.log('Unable to save user');
            } else {
                console.log("New user has been saved");
            }
        });
        res.status(201).send("Success registration");

    } catch(registerErr){
        res.status(500).send("Failed registration")
        console.log(`This is the register error: ${registerErr}`);
    }
});





module.exports = router;