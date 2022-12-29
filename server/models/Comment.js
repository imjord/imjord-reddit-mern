const {Schema, model} = require('mongoose');



const CommentSchema = new Schema({
    user: {
        type: String
    },
    text: {
        type: String,
        trim: true, 
        required: true
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    // single comment for 1 post
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
});


const Comment = new model("Comment", CommentSchema);


module.exports = Comment;