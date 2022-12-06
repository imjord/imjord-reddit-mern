import React from 'react'
import Post from './Post/Post'
import './Posts.css'

const Posts = (props) => {

  const {posts, loading } = props;

  return (
    <div className='posts-div'>
        <Post posts={posts} loading={loading} />
      
    </div>
  )
}

export default Posts