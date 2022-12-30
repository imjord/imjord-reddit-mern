const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');


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
        // create a new post as a user
        
        

        let errors = [];
        const newPost = new Post({
            user: req.session.user,
            title: req.body.title, 
            content: req.body.content
        })

        // add the post to the users posts array
        const user = User.findOne({username: req.session.user});
        user.posts.push(newPost);
        user.save();

        
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