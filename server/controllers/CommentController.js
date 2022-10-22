const Comment = require('../models/Comment');
const Post = require('../models/Post');



const CommentController = {
    // create a comment on a post 
    async CreateComment(req,res){
        const id = req.params.id;

        const comment = new Comment({
            text: req.body.text,
            post: id
        });

        await comment.save();
        const post = await Post.findById(id);
        // push into it
        post.comments.push(comment);

        post.save().then(
            results => {
                res.json({message: "Comment created"});
            }
        ).catch(err => {
            console.log(err);
        })
    }



}



module.exports = CommentController;