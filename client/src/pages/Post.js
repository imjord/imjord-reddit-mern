import React, {useState, useEffect} from "react";
import "./Post.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";


const Post = (props) => {
    const {user, CreatePost, communties, GetCommunties} = props;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [community, setCommunity] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, content, community);
        CreatePost(title, content, community);
        setTitle("");
        setContent("");
        setCommunity("");
    }




    useEffect(() => {
        GetCommunties();
    }, []);
    return (
        <div> {user.length > 0 ? <div className="postPage-container">
        <div className="left">
        <div className="title-postPage">Create a post </div>
        <hr />
        <div className="post-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* dropdown for communties */}

                    <select onChange={(e) => setCommunity(e.target.value)}  className="form-control" id="community">
                    <option>Choose a community</option>
                    {/* map over communties name */}
                    {communties.map((communties) => {
                        return <option value={communties._id} >{communties.name}</option>
                    })}
                    </select>
                    
                    <div className="input-margin">
                    <input type="text" className="post-form-control" id="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                    </div>
                    <div className="input-margin">
                    <textarea type="text" className="post-form-control" id="text" onChange={(e) => setContent(e.target.value)} placeholder="Text" />

                    </div>
                    </div>
                    <button type="submit"  className="post-btn">Post</button>
            </form>
        </div>
             </div>
        <div className="right">
            <div className="rules">
                <div className="title-postPage">Posting to imjord reddit</div>
            </div>
            <hr />
            <div className="ruleList">
                <ul>
                    <li>Be respectful</li>
                    <li>Be civil</li>
                    <li> <FontAwesomeIcon icon={faFaceSmile} /> Be kind</li>
                    <li>Be helpful</li>
                    <li>Be honest</li>
                    <li>Be funny</li>
                    <li>Be original</li>
                    <li>Be creative</li>
                    <li>Be yourself</li>
                </ul>
                </div>
            </div>
        
    </div> : <div> <p> you must be logged in to view this page</p></div>}
         </div>
       
    )

};


export default Post;