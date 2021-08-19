const User = ('../models/User')

const authController = {
    register: async function(req, res) {
        res.send("this is the register function")
    },
    login: async function(req, res) {
        res.send("this is the login function ")
    }
}

module.exports = authController;
