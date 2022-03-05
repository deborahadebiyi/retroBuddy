const router = require("express").Router();
const User = require("../models/User");
const bcrypt =  require("bcrypt");
const saltRounds = 10;

//REGISTER
router.post("/register", async(req,res)=>{
    try{
        //hash password
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // console.log(`SALT: ${salt}`);
        // console.log(`HASHED PWD:${hashedPassword}`);
        
        //creates new participant
        const user = await new User({
            username: req.body.username,
            password: hashedPassword,
            avatar: req.body.avatar
        })
        
        //saves participant to db and returns response
        await user.save((err)=>{
            if(err) {
                res.status(400).send("Unsuccessful registration")
                console.log('Unable to save user');
            } else {
                res.redirect(201, "/login")
                console.log("New user has been saved");
            } 
        });

    } catch(registerErr){
        res.status(500).send("Failed registration")
        console.log(`This is the register error: ${registerErr}`);
    }
});

//LOGIN
router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username})
            if(!user) {
                res.status(404).send("User not found");
            }
        
        // console.log(user)
        // console.log(`ENTERED: ${req.body.password}`)
        // console.log(`STORED: ${user.password}`)
         
        const isMatch = await bcrypt.compare(req.body.password, user.password)
            if (isMatch == false) {
                res.status(400).send("Invalid credentials");
            } else {
                res.redirect(200, "/profile")
                console.log("Login success");
            } 
      
    } catch(loginErr) {
        console.log(`This is the login error: ${loginErr}`);
    }

})



module.exports = router;