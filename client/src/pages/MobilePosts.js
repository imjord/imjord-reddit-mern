import React, {useEffect, useState} from "react";
import './MobilePosts.css';
import {useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartSimple, faAngleDoubleUp, faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
import {formatDate} from '../lib/Moment';

const MobilePosts = (props) => {
    const {GetSinglePost, post, CreateComment, LikePost, DislikePost} = props;
    const {id} = useParams();
    const [comment, setComment] = useState('');
   
    
    const handleSubmit = (e) => {
       
        CreateComment(post._id, comment);

      }

    useEffect(() => {
        GetSinglePost(id);
    }, []);

    return (
        <div className="column-post-container">
        <div className="mobile-post-details">
           <div className="mobile-post-title">
               <h3>{post.title}</h3><span>{formatDate(post.date)}</span>
               
           </div>
           <div className="mobile-post-title-user">
               <h4>By {post.user}</h4>
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
                <form>
                    <div><input onChange={(e) => setComment(e.target.value)} type="text" placeholder="Add a comment..."/> </div>
                    <div><button onClick={handleSubmit}>Post</button>  </div>
                </form>
            </div>
                {post.comments?.map((comment) => {
                    return (
                        <div className="mobile-post-comments">
                            <div className="mobile-post-comment-user">
                                <h4>{comment.user}</h4><span>{formatDate(comment.date)}</span>
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