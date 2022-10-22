const Post = require('../models/Post');
const Comment = require('../models/Comment');



const PostController = {

    // get posts method 
    GetPosts(req,res){
        
        Post.find().populate("comments").then(results => {
            res.json(results)
        }).catch(err => {
            console.log(err)
        })
    },
    // make a post 
    CreatePost(req,res){
        const newPost = new Post({
            title: req.body.title, 
            content: req.body.content
        })

        newPost.save().then(
            results => {
                res.json({message: "Post created"});
            }
        ).catch(err => {
            console.log(err);
        })
    }

}



module.exports = PostController