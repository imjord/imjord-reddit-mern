import React from 'react'
import Post from './Post/Post'
import './Posts.css'

const Posts = (props) => {

  const {LikePost, DislikePost, userComment, GetComments, CreateComment , setPostModal, posts, GetSinglePost, post, loading } = props;

  return (
    <div className='posts-div'>
        <Post DislikePost={DislikePost} LikePost={LikePost} userComment={userComment} GetComments={GetComments} CreateComment={CreateComment} setPostModal={setPostModal} GetSinglePost={GetSinglePost} post={post} posts={posts} loading={loading} />
      
    </div>
  )
}

export default Posts