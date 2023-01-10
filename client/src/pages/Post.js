import React, {useEffect} from "react";
import "./Post.css";


const Post = (props) => {
    const {user} = props;

    return (
        <div> {user.length > 0 ? <div className="postPage-container">
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
        
    </div> : <div> <p> you must be logged in to view this page</p></div>}
         </div>
       
    )

};


export default Post;