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
        default: 'https://images.unsplash.com/photo-1558743941-459179fe00e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
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