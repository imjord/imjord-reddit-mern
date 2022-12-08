const User = require('../models/User');


const UserController = {
    // get all users
    getUsers(req, res){
        User.find().then(response => {
            res.json(response);
            console.log(req.session)
        }).catch(err => {
            console.log(err);
        });
    },
    // create a new user
    createUser(req,res) {
        const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

       

        newUser.save().then(response => {
            res.json({message: "user created!"});
        }).catch(err => {
            console.log(err);
        });
    }


};


module.exports = UserController;