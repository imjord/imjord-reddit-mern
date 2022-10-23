import Filter from './Components/Filter/Filter';
import React, {useState, useEffect} from 'react';
import NavBar from './Components/Navbar/NavBar';
import Posts from './Components/Posts/Posts';
import TrendingBar from './Components/TrendingBar/TrendingBar';
import './App.css' 
import {BrowserRouter} from 'react-router-dom';

import axios from "axios";
function App() {
  const [posts, setPosts] = useState([{}]);

  const GetPosts = async () => {
    const res = await axios.get('http://localhost:3001/posts');
    setPosts(res);   
  }

  const GetPostDetails = async (id) => {
    const res = await axios.get('')
  }


  useEffect(() => {
    GetPosts();
  }, [])


  return (
    <> 
    <NavBar />
    <main>
      <TrendingBar />
      <Filter />
      <Posts posts={posts} />
    </main>
    </>
   
  );
}

export default App;
