import Filter from './Components/Filter/Filter';
import React, {useState, useEffect} from 'react';
import NavBar from './Components/Navbar/NavBar';
import Posts from './Components/Posts/Posts';
import TrendingBar from './Components/TrendingBar/TrendingBar';
import './App.css' 
import axios from "axios";
function App() {
  const [posts, setPosts] = useState([{}]);

  const GetPosts = async () => {
    const res = await axios.get('http://localhost:3001/posts');
    setPosts(res);   
  }


  useEffect(() => {
    GetPosts();
  }, [])


  return (
    <>
    <NavBar />
    <TrendingBar />
    <main>
      <Filter />
      <Posts posts={posts} />
    </main>
    </>
  );
}

export default App;
