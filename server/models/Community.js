const {Schema, model} = require('mongoose');



const CommunitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    },
    date: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});


const Community = new model("Community", CommunitySchema);


module.exports = Community;