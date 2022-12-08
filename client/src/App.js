import Filter from './Components/Filter/Filter';
import React, {useState, useEffect} from 'react';
import NavBar from './Components/Navbar/NavBar';
import Posts from './Components/Posts/Posts';
import TrendingBar from './Components/TrendingBar/TrendingBar';
import './App.css' 
import Spinner from './Components/Spinner/Spinner';
import {BrowserRouter} from 'react-router-dom';

import axios from "axios";
function App() {
  const [posts, setPosts] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([{}]);
  
  const GetPosts = async () => {
    setLoading(true)
    const res = await axios.get('http://localhost:3001/posts');
    setPosts(res);   
    setLoading(false);
  }

  const GetPostDetails = async (id) => {
    const res = await axios.get('')
  }

  const CreateUser = async (email, username, password) => {
    const res = await axios.post("http://localhost:3001/users", {
      email: email, 
      username: username,
      password: password
    });
    setUser(res);
    alert("user created" , user)
  }

  useEffect(() => {
    GetPosts();
  }, [])


  return (
    <> 
    <NavBar CreateUser={CreateUser} />
    <main>
      <TrendingBar />
      <Filter />
      <Posts posts={posts} loading={loading} />
    </main>
    </>
   
  );
}

export default App;
