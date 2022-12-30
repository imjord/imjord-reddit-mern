const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new Schema({
    avatar: {
        type: String,
        default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    },
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
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
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