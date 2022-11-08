const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');


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
// set up pre-save middleware to hash password
UserSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  UserSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = new model('User', UserSchema);


module.exports = User;