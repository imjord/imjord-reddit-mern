import React, {useState, useEffect} from "react";
import TrendingBar from "../Components/TrendingBar/TrendingBar";
import Filter from "../Components/Filter/Filter";
import Posts from "../Components/Posts/Posts";


const Home = (props) => {
    const { setPostModal, posts, post, GetSinglePost, loading} = props;
    return (
        <main>
        <TrendingBar />
        <Filter />
        <Posts setPostModal={setPostModal}  post={post} GetSinglePost={GetSinglePost} posts={posts} loading={loading}/>
      </main>
    )
};


export default Home;