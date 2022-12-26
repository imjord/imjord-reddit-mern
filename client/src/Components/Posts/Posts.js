import React from 'react'
import Post from './Post/Post'
import './Posts.css'

const Posts = (props) => {

  const {setPostModal, posts, GetSinglePost, post, loading } = props;

  return (
    <div className='posts-div'>
        <Post setPostModal={setPostModal} GetSinglePost={GetSinglePost} post={post} posts={posts} loading={loading} />
      
    </div>
  )
}

export default Posts