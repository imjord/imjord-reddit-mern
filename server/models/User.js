const {Schema, model} = require('mongoose');



const UserSchema = new Schema({
    email: {
        type: String, 
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
});


const User = new model('User', UserSchema);


module.exports = User;