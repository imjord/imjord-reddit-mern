import React, {useState, useEffect} from 'react'
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong, faDownLong, faComments, faShare, faX} from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../Spinner/Spinner'
import image from './m.png';
import { formatDate } from '../../../lib/Moment';

const Post = (props) => {
 const { DislikePost, LikePost, userComment, GetComments, posts, CreateComment, setPostModal, GetSinglePost, post, loading } = props;
const [toggle, setToggle] = useState(false);
const [comment, setComment] = useState('');


const CloseModal = () => {
  post._id = null;
  setPostModal(false);
} 
const handleSubmit = (e) => {
  e.preventDefault();
  CreateComment(post._id, comment);
}

// use effect to get comments
useEffect(() => {
  // if post id is not null, get comments
  if(post._id) {
    GetComments(post._id);
    console.log(userComment)
  } else {
    // if post id is null do nothing
    return;
  }
}, [post._id], [userComment])



  return (
      <div className='post-component'>
        {loading ? <Spinner /> : <div> {posts.data?.map((item) => {
        return(
          <div className='post-container' onClick={() => GetSinglePost(item._id)}>
            <div className='votes-container'>
              <div>
                    <FontAwesomeIcon id='post-icons' icon={faUpLong} />
                    <p>{item.likes ? item.likes : 0}</p>
                    <FontAwesomeIcon icon={faDownLong} />
                    </div>
              </div>
          <div className='post'>
                  
            <div> <span>r/{item.community}   </span><span className='user-color'>posted by u/{item.user}  </span> </div>
          <div> <h3>{item.title} </h3> </div>
         
          <div id='post-icons'><FontAwesomeIcon id='post-icons' icon={faComments} /> {item.comments.length} Comments  <FontAwesomeIcon id='post-icons' icon={faShare} />  Share ...</div>
          </div>
          </div>
        )
       
      })}  </div>}
      {post._id ? <div className='POST-CONTAINER'> <div className='post-details'> <div className='post-nav'>
        <div className='post-nav-item'> <FontAwesomeIcon onClick={() => LikePost(post._id)} id='post-icons' icon={faUpLong} /> {post.likes} <FontAwesomeIcon id='post-icons' onClick={() => DislikePost(post._id)} icon={faDownLong} />  {post.upvotes}  </div>
          <div className='post-nav-item' id='post-title-item'> {post.title}  </div>
          <div className='post-nav-item'> <FontAwesomeIcon icon={faX} onClick={() => CloseModal()} />   </div>
         </div> 
          <div className='post-details-container'>
            <div className='post-details-header'>
              <div className='post-details-header-item'> <span>r/{post.community.name}  </span><span className='user-color'>posted by u/{post.user}  </span> </div>
              <div className='post-details-header-item'> <span>{post.title}  </span> </div>
            </div>
            <div className='post-details-content'>
              <div className='post-details-content-item'> <img style={{height: 150}} src={image} alt='sample' /> </div>
              <div className='post-details-content-item'> {post.content} </div>
            </div>
            <div className='post-details-footer'>
              <div className='post-details-footer-item'> <FontAwesomeIcon id='post-icons' icon={faComments} /> {post.comments.length} Comments  <FontAwesomeIcon id='post-icons' icon={faShare} />  Share ...</div>
            </div>
            
            {/* form with a text area asking for user thoughts */}
           
              <div>
                
              <div className='post-details-content'>
              <div className='post-details-form'>
              <div className='post-details-form-item'> <textarea onChange={(e) => setComment(e.target.value)} placeholder='What are your thoughts?' /> </div>
              <div className='post-details-form-item'> <button onClick={handleSubmit}>Submit</button> </div>
              </div>
                  <div className='post-details-content-item'>  {userComment.map(item => {
                    return(
                      <div>
                       <p> created by user:{item.user}</p>
                        <p> created at: {formatDate(item.date)}</p>
                        <p>{item.text}</p>
                      </div>
                    )
                  })}   </div>
                </div>
                </div>    
          </div>
          
          <div className='community-details'>
        <div className='community-details-header'>
          <div className='community-details-header-item'> <span>r/{post.community}   hehet</span> </div>
          
      </div> </div>
     </div>
       </div> : null}
      </div>
      
  )
}

export default Post