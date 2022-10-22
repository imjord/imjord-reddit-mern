const {Schema, model} = require('mongoose');



const CommunitySchema = new Schema({
    name: {
        type: String,
        required: true
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