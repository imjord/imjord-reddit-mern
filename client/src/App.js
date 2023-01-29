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
import Profile from './pages/Profile';
import Post from './pages/Post';
import Community from './pages/Community';
import Communities from './pages/Communities';


function App() {
  const [posts, setPosts] = useState([{}]);
  const [post, setPost] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [msg, setMsg] = useState("");
  const [validation, setValidation] = useState([]);
  const [postModal, setPostModal] = useState(false);
  const [userComment, userSetComment] = useState([{}]);
  const [communties, setCommunties] = useState([{}]);
  


  // get all communties
  const GetCommunties = async () => {
    const res = await axios.get('/community');
    setCommunties(res.data);
  };

  // create a community
  const CreateCommunity = async (name, description) => {
    const res = await axios.post('/community', {
      name: name,
      description: description
    }, {withCredentials: true});
  };

  // join a community 
  const JoinCommunity = async (id) => {
    const res = await axios.post(`/community/join/${id}`, {}, {withCredentials: true});
    alert(res.data.message);
  };

  // create a post 
  const CreatePost = async (title, content, community) => {
    const res = await axios.post('/posts', {
      title: title,
      content: content,
      community: community
    }, {withCredentials: true});
     
  };

  // create a comment on a post dont return anything
  const CreateComment = async (id, text) => {
    const res = await axios.post(`/comment/${id}`, {
      text: text
    }, {withCredentials: true});
  };

  // get comments on a post return an array of comments
const GetComments = async (id) => {
  const res = await axios.get(`/comment/${id}`);
  userSetComment(res.data);
};
  

// like a post
const LikePost = async (id) => {
  const res = await axios.post(`/posts/${id}/like`, {}, {withCredentials: true});
};

// dislike a post
const DislikePost = async (id) => {
  const res = await axios.post(`/posts/${id}/dislike`, {},  {withCredentials: true});
   
};

  


  const Logout = async () => {

    const res = await axios.get("/logout", {withCredentials: true});
    setLoggedIn(false);
    localStorage.clear();
    setUser([]);
  };

  
  const GetPosts = async () => {
    setLoading(true)
    const res = await axios.get('/posts');
    setPosts(res);   
     
    setLoading(false);
  };

  const GetSinglePost = async (id) => {
    setLoading(true)
    setPostModal(true);
    const res = await axios.get(`/posts/${id}`);
     
    setPost(res.data);
    setLoading(false);
  };

  const LoginUser = async (username, password) => {
    try {
      const res = await axios.post("/login", {
        username: username,
        password: password
    }, {withCredentials: true});
     
      if(res.data.message == 'User Not Found'){
        setMsg(res.data.message);
      } else {
      // set logged in to local storage
      localStorage.setItem("imjordRedditLoggedIn", res.data.user);
      setLoggedIn(true);
      
      setMsg(res.data.message);
      setUser(res.data.user);
       

      // setNavigate(true);
      }
    } catch(e) {
       
    }
  };


  const CreateUser = async (email, username, password) => {
    try {
      const res = await axios.post("/users", {
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
       
      setValidation(e.response.data);
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("imjordRedditLoggedIn");
    if(loggedInUser){
      setUser(loggedInUser);
       
    }  
    GetPosts();
    
  }, [])


  return (
   <BrowserRouter>
    <NavBar   setValidation={setValidation} validation={validation} setMsg={setMsg} Logout={Logout} user={user} CreateUser={CreateUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} LoginUser={LoginUser} msg={msg}  />
    <Routes>
      <Route path="/" element={<Home  DislikePost={DislikePost} LikePost={LikePost} userComment={userComment} GetComments={GetComments} CreateComment={CreateComment} setPostModal={setPostModal} GetSinglePost={GetSinglePost} post={post}  posts={posts} loading={loading} />} />
      <Route path="/createcommunity" element={<Community user={user} CreateCommunity={CreateCommunity} />} />
      <Route path="/submit" element={<Post CreatePost={CreatePost} communties={communties} GetCommunties={GetCommunties} user={user}/>} />
      {/* <Route path="/community/:id" element={<CommunityPage />} /> */}
      <Route path='/communties' element={<Communities JoinCommunity={JoinCommunity} GetCommunties={GetCommunties} communties={communties} />} />
      <Route path="/profile" element={<Profile setUser={setUser} user={user}/>} />
      <Route path="*" element={<h1>404</h1>} />
     
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
