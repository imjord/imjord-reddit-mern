const User = require('../models/User');
const passport = require('passport');


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
    createUser(req,res, next) {
        const userValidation = [];
        const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        User.findOne({username: newUser.username}).then((user) => {
            if(user){
                userValidation.push("Username already exists!");
                res.status(400).json(userValidation);
            }
        })
        if (!newUser.email){
            userValidation.push("Please Enter a Valid Email Address");
        }
        if(!newUser.username) { 
            userValidation.push("Please Enter a Username");
        }
        if(!newUser.password){
            userValidation.push("Please Enter a Password");
        }
        if(newUser.password.length < 6){
            userValidation.push("Please enter a password greater than 6 letters");
        }
        if(userValidation.length > 0){
            res.status(400).json(userValidation);
        } else {
            newUser.save().then(response => {
                req.session.user = newUser.username
                res.json({message: "User Created", user: req.session.user});
                
                
            }).catch(err => {
                console.log(err);
            });
        }
        
    },  
    loginUser(req,res, next){
        passport.authenticate('local', (err, user, info) => {
            if(err){
                console.log(err);
            }
            if(user){
                req.session.user = user.username
                res.json({message: "User Logged In", user: req.session.user});
                
                
            }
            else{
                res.json({message: "User Not Found"})
            }
        }
        )(req,res, next);
    },
     // logout page
     logoutUser(req,res){
        
        req.session.destroy((err) => {
            if(err){
                console.log(err);
            } else {
                res.clearCookie('session').json({message: 'logout complete'});
            }
        }
    )
    },

};


module.exports = UserController;