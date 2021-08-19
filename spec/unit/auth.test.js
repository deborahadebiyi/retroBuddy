const User = require("../../models/User");
const authController = require("../../controllers/auth");

test('dummy test', () => {
    expect(2).toEqual(2);
})

test("register function", () => {
    it("requires username, displayname and password", ()=>{
        //req.body.username should not be null
    })

    it("prompts if there are empty fields", ()=>{
        //send a 412 code
    })

    it("prompts for different username if username already in use", ()=>{

    })

    it("saves username, displayname and password to database", ()=>{
        return 
    })
    
    it("prompts if username is not long enough", ()=>{
        //send a 411 code 
    })
})
