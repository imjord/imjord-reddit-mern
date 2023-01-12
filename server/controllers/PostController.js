const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');
const Community = require('../models/Community');


const PostController = {

    // get posts method 
    GetPosts(req,res){
        
        Post.find().populate("community").populate("comments").then(results => {
            res.json(results);
             
        }).catch(err => {
             
        })
    },
    // get a post by id 
    GetPostDetails(req,res) {
        Post.findById({_id: req.params.id}).populate("comments").populate("community").then(results => {
            res.json(results)
        }).catch(err => {
             
        })
    },
    // make a post 
    CreatePost(req,res){
        // create a new post as a user
        
        

        let errors = [];
        const newPost = new Post({
            user: req.session.user,
            title: req.body.title, 
            content: req.body.content,
            community: req.body.community,
        })

        // add the post to the users posts array
        const user = User.findOne({username: req.session.user}).then(results => {
             
            results.posts.push(newPost);
            results.save();

        }).catch(err => {
             
        })
        // add the post to the community posts array
        const community = Community.findById({_id: req.body.communityId}).then(results => {
            results.posts.push(newPost);
            results.save();
        }).catch(err => {
             
        })
        
    //   need validation 
        newPost.save().then(
            results => {
                res.json({message: "Post created"});
            }
        ).catch(err => {
             
        })
    },
    // a user can like a post
    LikePost(req,res){
        Post.findById({_id: req.params.id}).then(post => {
            post.likes = post.likes + 1;
            post.save().then(
                results => {
                    res.json({message: "Post liked"});
                     
                }
            ).catch(err => {
                 
            })
        }).catch(err => {
             
        })
    }, 

    // a user can dislike a post
    DislikePost(req,res){
        Post.findById({_id: req.params.id}).then(post => {
            post.likes =  post.likes - 1;
            post.save().then(
                results => {
                    res.json({message: "Post disliked"});
                    //  
                     
                }
            ).catch(err => {
                 
            })
        }).catch(err => {
             
        })
    }

}



module.exports = PostController