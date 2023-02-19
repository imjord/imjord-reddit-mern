import React, {useEffect, useState} from "react";
import './MobilePosts.css';
import {useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartSimple, faAngleDoubleUp, faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
import {formatDate} from '../lib/Moment';

const MobilePosts = (props) => {
    const {GetSinglePost, post, CreateComment, LikePost, DislikePost, user} = props;
    const {id} = useParams();
    const [comment, setComment] = useState('');
   const  [msg, setMsg] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        CreateComment(post._id, comment);
        if(user.length > 0) {

        setMsg('Comment added!');
        setTimeout(() => {
            setMsg('');
        }, 3000);
        setComment('');
      } else {
        setMsg('You must be logged in to comment');
        setTimeout(() => {
            setMsg('');
        }, 3000);
        }
    }

    useEffect(() => {
        GetSinglePost(id);
        console.log(post);
    }, []);

    return (
        <div className="column-post-container">
        <div className="mobile-post-details">
           <div className="mobile-post-title">
               <h3>r/{post.community?.name} <span className="date">{formatDate(post.date)}</span></h3><span></span> <h7 id="gray">by {post.user}</h7>
               
           </div>
           
           <div className="mobile-post-description">
               <p>{post.content}</p>
               </div>
           <div className="mobile-post-image">
               <img src={post.image} alt="post"/>
               </div>
               <div className="mobile-likes">
               <button onClick={() => LikePost(post._id)} id="mobile-btn"><FontAwesomeIcon icon={faAngleDoubleUp} /></button><span id="mobile-like-chart">{post.likes}</span><FontAwesomeIcon id="mobile-like-chart" icon={faChartSimple} /><button onClick={() => DislikePost(post._id)} id="mobile-btn"><FontAwesomeIcon icon={faAngleDoubleDown} /></button>
               </div>
            </div>
            <div className="comment-form">
                {user.length > 0 ? <h4>Logged in as {user.username}</h4> : <h4>Log in to comment</h4>}
                {msg ? <p>{msg}</p> : null}
                <form>
                    <div><input onChange={(e) => setComment(e.target.value)} type="text" placeholder="Add a comment..."/> </div>
                    <div><button onClick={handleSubmit}>Post</button>  </div>
                </form>
            </div>
                {post.comments?.map((comment) => {
                    return (
                        <div className="mobile-post-comments">
                            <div className="mobile-post-comment-user">
                                <h4>{comment.user}</h4><span className="date">{formatDate(comment.date)}</span>
                                </div>
                            <div className="mobile-post-comment-description">
                                <p>{comment.text}</p>
                                </div>
                </div>
                    )
                })}
                    
   
   </div>
        
       
    );
}

export default MobilePosts;