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
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [msg, setMsg] = useState("");
  

  const Logout = async () => {

    const res = await axios.get("http://localhost:3001/logout");
    setLoggedIn(false);
    localStorage.clear();
    setUser([]);
  }

  
  const GetPosts = async () => {
    setLoading(true)
    const res = await axios.get('http://localhost:3001/posts');
    setPosts(res);   
    setLoading(false);
  }

  const GetPostDetails = async (id) => {
    const res = await axios.get('http://localhost:3001/login');
  }

  const LoginUser = async (username, password) => {

    try {
      const res = await axios.post("http://localhost:3001/login", {
      username: username,
        password: password
    }, {withCredentials: true});
    console.log(res);
      if(res.data.message == 'User Not Found'){
        setMsg(res.data.message);
      } else {
      // set logged in to local storage
      localStorage.setItem('loggedIn', res.data.user);
      setLoggedIn(true);
      setMsg(res.data.message);
      setUser(res.data.user);
      console.log(user)

      // setNavigate(true);
      }
    } catch(e) {
      console.log(e)
    }
    
  }

  const CreateUser = async (email, username, password) => {
    try {
      const res = await axios.post("http://localhost:3001/users", {
        email: email, 
        username: username,
        password: password
      },
      {withCredentials: true});
      localStorage.setItem('loggedIn', res.data.user);
      setLoggedIn(true);
      setUser(res.data.user);
      setMsg(res.data.message);
    } catch (e){
      console.log(e)
    }
   
    
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedIn');
    if(loggedInUser){
      setUser(loggedInUser);
      console.log(user)
    }  
    GetPosts();
  }, [])


  return (
    <> 
    <NavBar setMsg={setMsg} Logout={Logout} user={user} CreateUser={CreateUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} LoginUser={LoginUser} msg={msg}  />
    <main>
      <TrendingBar />
      <Filter />
      <Posts posts={posts} loading={loading} />
    </main>
    </>
   
  );
}

export default App;
