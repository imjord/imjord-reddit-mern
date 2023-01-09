const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');
const Community = require('../models/Community');


const PostController = {

    // get posts method 
    GetPosts(req,res){
        
        Post.find().populate("comments").populate("community").then(results => {
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
            content: req.body.content,
            community: req.body.communityId,
        })

        // add the post to the users posts array
        const user = User.findOne({username: req.session.user}).then(results => {
            console.log(results);
            results.posts.push(newPost);
            results.save();

        }).catch(err => {
            console.log(err);
        })
        // add the post to the community posts array
        const community = Community.findById({_id: req.body.communityId}).then(results => {
            results.posts.push(newPost);
            results.save();
        }).catch(err => {
            console.log(err);
        })
        
    //   need validation 
        newPost.save().then(
            results => {
                res.json({message: "Post created"});
            }
        ).catch(err => {
            console.log(err);
        })
    },
    // a user can like a post
    LikePost(req,res){
        Post.findById({_id: req.params.id}).then(post => {
            post.likes = post.likes + 1;
            post.save().then(
                results => {
                    res.json({message: "Post liked"});
                    console.log(post.likes);
                }
            ).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }, 

    // a user can dislike a post
    DislikePost(req,res){
        Post.findById({_id: req.params.id}).then(post => {
            post.likes =  post.likes - 1;
            post.save().then(
                results => {
                    res.json({message: "Post disliked"});
                    // console log the likes 
                    console.log(post.likes);
                }
            ).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }

}



module.exports = PostController