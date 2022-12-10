const Post = require('../models/Post');
const Comment = require('../models/Comment');



const PostController = {

    // get posts method 
    GetPosts(req,res){
        
        Post.find().populate("comments").then(results => {
            res.json(results);
            console.log(req.session);
        }).catch(err => {
            console.log(err)
        })
    },
    // get a post by id 
    GetPostDetails(req,res) {
        Post.findById({_id: req.params.id}).populate("comments").then(results => {
            res.json(results)
        }).catch(err => {
            console.log(err)
        })
    },
    // make a post 
    CreatePost(req,res){

        let errors = [];
        const newPost = new Post({
            user: req.session.user,
            title: req.body.title, 
            content: req.body.content
        })
        
    //   need validation 
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