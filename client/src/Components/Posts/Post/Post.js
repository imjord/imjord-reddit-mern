import React from 'react'
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong, faDownLong, faComments, faShare} from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../Spinner/Spinner'

const Post = (props) => {
 const {posts, loading } = props;
  return (
      <div className='post-component'>
        {loading ? <Spinner /> : <div> {posts.data?.map((item) => {
        return(
          <div className='post-container'>
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

      </div>
      
  )
}

export default Post