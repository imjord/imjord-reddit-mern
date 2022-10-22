const {Schema, model} = require('mongoose');



const PostSchema = new Schema({
    title: {
        type: String 
        
    },
    content: {
        type: String
    }
});


const Post = new model("Post", PostSchema);


module.exports = Post;