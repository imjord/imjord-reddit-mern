const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');



    // create a comment on a post take a postId that finds the post that the comment is for and then push the comment to the post's comments array
   
    const CommentController = {
        // get all comments for a post 
        async GetComments(req,res){
            // get the id from the params
            const id = req.params.id;
            // find the post by id
            const post = await Post.findById(id);
            // find all comments where the post is the post we found
            const comments = await Comment.find({post: post});
            // send the comments back
            res.json(comments);
        },


        // create a comment on a post 
        async CreateComment(req,res){
            const id = req.params.id;
    
            const comment = new Comment({
                user: req.session.user,
                text: req.body.text,
                post: id
            });
    
            await comment.save();
            const post = await Post.findById(id);
            // push into it
            post.comments.push(comment);
            // save the comment to the users comments array
            const user = await User.findOne({username: req.session.user});
            user.comments.push(comment);
            await user.save();


            post.save().then(
                results => {
                    console.log(results);
                    res.json({ message: "Comment Created"});
                }
            ).catch(err => {
                console.log(err, "error");
            })
        }
    
    
    
    }




module.exports = CommentController;