import React from 'react'
import './Post.css'

const Post = (props) => {
 const {posts } = props;
  return (
      <div>
{posts.data?.map((item) => {
        return(
          <div className='post'>
            <div> <span>r/item.community</span><span>posted by u/imjord</span> </div>
          <div> <h3>{item.title} </h3> </div>
          <div> 6.3k Comments   Share ...</div>
          </div>
        )
        
      })}
      </div>
      
  )
}

export default Post