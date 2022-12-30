import Filter from './Components/Filter/Filter';
import React, {useState, useEffect} from 'react';
import NavBar from './Components/Navbar/NavBar';
import Posts from './Components/Posts/Posts';
import TrendingBar from './Components/TrendingBar/TrendingBar';
import './App.css' 
import Spinner from './Components/Spinner/Spinner';
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UserPage';


function App() {
  const [posts, setPosts] = useState([{}]);
  const [post, setPost] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [msg, setMsg] = useState("");
  const [validation, setValidation] = useState([]);
  const [userSettings, setUserSettings] = useState({});
  const [postModal, setPostModal] = useState(false);
  const [userComment, userSetComment] = useState([{}]);


  // create a comment on a post dont return anything
  const CreateComment = async (id, text) => {
    const res = await axios.post(`http://localhost:3001/comment/${id}`, {
      text: text
    }, {withCredentials: true});
  }

  // get comments on a post return an array of comments
const GetComments = async (id) => {
  const res = await axios.get(`http://localhost:3001/comment/${id}`);
  console.log(res.data);
  userSetComment(res.data);
}
  

  const UserSettings = async (id) => {
    const res = await axios.get(`http://localhost:3001/user/${id}`);
    console.log(res.data);
    setUserSettings(res);
  }


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

  const GetSinglePost = async (id) => {
    setLoading(true)
    setPostModal(true);
    const res = await axios.get(`http://localhost:3001/posts/${id}`);
    console.log(res.data);
    setPost(res.data);
    setLoading(false);
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
      localStorage.setItem("imjordRedditLoggedIn", res.data.user);
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
      localStorage.setItem("imjordRedditLoggedIn", res.data.user);
      
     
      setLoggedIn(true);
      setUser(res.data.user);
      setMsg(res.data.message);
      setValidation("");
    } catch (e){
      console.log(e)
      setValidation(e.response.data);
    }
   
    
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("imjordRedditLoggedIn");
    if(loggedInUser){
      setUser(loggedInUser);
      console.log(user)
    }  
    GetPosts();
    
  }, [])


  return (
   <BrowserRouter>
    <NavBar  UserSettings={UserSettings} setValidation={setValidation} validation={validation} setMsg={setMsg} Logout={Logout} user={user} CreateUser={CreateUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} LoginUser={LoginUser} msg={msg}  />
    <Routes>
      <Route path="/" element={<Home userComment={userComment} GetComments={GetComments} CreateComment={CreateComment} setPostModal={setPostModal} GetSinglePost={GetSinglePost} post={post}  posts={posts} loading={loading} />} />
      <Route path="/user/:id" element={<UserPage />} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
