import React, {useState, useEffect} from "react";
import TrendingBar from "../Components/TrendingBar/TrendingBar";
import Filter from "../Components/Filter/Filter";
import Posts from "../Components/Posts/Posts";


const Home = (props) => {
    const {posts, loading, GetPosts} = props;
    return (
        <main>
        <TrendingBar />
        <Filter />
        <Posts posts={posts} loading={loading}/>
      </main>
    )
};


export default Home;