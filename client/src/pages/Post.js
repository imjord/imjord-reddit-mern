import React from "react";
import "./Post.css";


const Post = (props) => {
    return (
        <div className="postPage-container">
            <div className="left">
            <div className="title-postPage">Create a post </div>
            <hr />
            <div className="post-form">
                <form>
                    <div className="form-group">
                        <div>
                        <input type="text" className="post-form-control" id="title" placeholder="Title" />

                        </div>
                        <div>
                        <input type="text" className="post-form-control" id="text" placeholder="Text" />

                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Post</button>
                </form>
            </div>
                 </div>
            <div className="right">
                <div className="rules">
                    <div className="title-postPage">Posting to reddit</div>
                </div>
                </div>
            
        </div>
    )

};


export default Post;