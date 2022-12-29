const Comment = require('../models/Comment');
const Post = require('../models/Post');




    // create a comment on a post take a postId that finds the post that the comment is for and then push the comment to the post's comments array
   
    const CommentController = {
        // create a comment on a post 
        async CreateComment(req,res){
            const id = req.params.id;
    
            const comment = new Comment({
                // add user from session
                user: req.session.user,
                text: req.body.text,
                post: id
            });
    
            await comment.save();
            const post = await Post.findById(id);
            // push into it
            post.comments.push(comment);
    
            post.save().then(
                results => {
                    console.log(results);
                    res.json({ message: "Comment created"});
                }
            ).catch(err => {
                console.log(err);
            })
        }
    
    
    
    }




module.exports = CommentController;