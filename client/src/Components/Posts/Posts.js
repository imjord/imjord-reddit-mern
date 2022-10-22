import React from 'react'
import Post from './Post/Post'
import './Posts.css'

const Posts = (props) => {

  const {posts } = props;

  return (
    <div className='posts-div'>
        <Post posts={posts}  />
      
    </div>
  )
}

export default Posts