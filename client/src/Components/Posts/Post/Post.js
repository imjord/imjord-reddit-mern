import React, {useState} from 'react'
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong, faDownLong, faComments, faShare, faX} from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../Spinner/Spinner'
import image from './m.png';

const Post = (props) => {
 const {posts, setPostModal, GetSinglePost, post, loading } = props;
const [toggle, setToggle] = useState(false);


const CloseModal = () => {
  post._id = null;
  setPostModal(false);
}

  return (
      <div className='post-component'>
        {loading ? <Spinner /> : <div> {posts.data?.map((item) => {
        return(
          <div className='post-container' onClick={() => GetSinglePost(item._id)}>
            <div className='votes-container'>
              <div>
                    <FontAwesomeIcon id='post-icons' icon={faUpLong} />
                    <p>{item.upvotes.length}</p>
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
        <div className='post-nav-item'> <FontAwesomeIcon id='post-icons' icon={faUpLong} /> {post.upvotes.length} <FontAwesomeIcon id='post-icons' icon={faDownLong} />  {post.upvotes}  </div>
          <div className='post-nav-item' id='post-title-item'> {post.title}  </div>
          <div className='post-nav-item'> <FontAwesomeIcon icon={faX} onClick={() => CloseModal()} />   </div>
         </div> 
          <div className='post-details-container'>
            <div className='post-details-header'>
              <div className='post-details-header-item'> <span>r/{post.community}   </span><span className='user-color'>posted by u/{post.user}  </span> </div>
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
            <div className='post-details-form'>
              <div className='post-details-form-item'> <textarea placeholder='What are your thoughts?' /> </div>
              <div className='post-details-form-item'> <button>Submit</button> </div>
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