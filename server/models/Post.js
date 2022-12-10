const {Schema, model} = require('mongoose');



const PostSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        trim: true, 
        required: true
        
    },
    content: {
        type: String,
        trim: true, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    community: {
        // type: Schema.Types.ObjectId,
        // ref: 'Community',
        type: String,
        default: 'Jord Community'
    },
    // array of comments for 1 post
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    upvotes: [{
        type: Number
    }],
    downvotes:[{
        type: Number
    }] 
});


const Post = new model("Post", PostSchema);


module.exports = Post;