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
    image: {
        type: String,
        default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    },
    date: {
        type: Date,
        default: Date.now
    },
    community: {
        type: Schema.Types.ObjectId,
         ref: 'Community',
            required: true
    },
    // array of comments for 1 post
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    likes: {
        type: Number,
        default: 0
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Post = new model("Post", PostSchema);


module.exports = Post;