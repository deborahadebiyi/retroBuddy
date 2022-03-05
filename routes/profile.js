const router = require("express").Router();
const Profile = require("../models/Profile");
const User = require("../models/User");

//UPDATE PROFILE
router.get("/profile", async(req,res)=>{
    try{
        //create participant profile
        const profile = await new Profile({
            status: false,
            isRetroLead: false,
            displayname: "",
            moodcheck: []
        })
        const avatar = await User.findOne({avatar: req.body.avatar})

    }catch(profileErr){

    }
})

//CHANGE STATUS FROM PARTICIPANT TO LEAD

//SELECT AVATAR


//SELECT MOOD
module.exports = router;