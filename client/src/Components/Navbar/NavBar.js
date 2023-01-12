import React, {useState, useEffect} from 'react'
import SearchBar from '../SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faUser, faPlus, faGear, faUserTie, faCaretDown, faRobot, faXmark, faMoon, faQuestion, faScroll, faBullhorn, faDoorOpen, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import './Nav.css';

const NavBar = (props) => {
  const {UserSettings, setValidation, validation, CreateUser, setMsg, loggedIn, setLoggedIn, LoginUser, msg, user, Logout} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [sign, setSign] = useState(false);
  const [log, setLog] = useState(false);
  const [continueSignup, setContinueSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userDropDown, setUserDropDown] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen);

  }

  const SignUp = () => {

    setSign(true);
  }

  const CloseModal = () => {
    setLog(false);
    setSign(false);
    setContinueSignup(false);
    setMsg("");
    setValidation("");
   
  }

  const LoginModal = () => {
    setLog(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateUser(email, username, password);
  }

 

  const handleLogin = (e) => {
    e.preventDefault();
    LoginUser(username, password);
  }

  // user drop down settings 
 

  const toggleUserDropDown = () => {
    setUserDropDown(!userDropDown);
  }



  return (
    <nav className='nav'>
        <div>
        <Link to={"/"}> <FontAwesomeIcon icon={faRobot} id="icon" /> </Link>
        </div>
        <SearchBar />
          <div className='nav-btn-div'>
              {user.length > 0 ? 
              <div className='logged-user'>
                <div className='user-option-container'> <Link id='link' to={"/submit"}> <FontAwesomeIcon icon={faPlus} id="post-icon" /> </Link> </div>
              <div className='user-container'>
                <div className="user-inner">
                <div className='user-icon'><FontAwesomeIcon icon={faUserTie} id="user-icon" /> </div>
                <div className='username'> {user} </div>
                <div onClick={toggleUserDropDown} className='user-icon' ><FontAwesomeIcon   icon={faCaretDown} id="user-icon" /> </div>
                {userDropDown ? <div className='dropdown-container'>
              <div className='mode'>  <FontAwesomeIcon icon={faMoon}  /> Dark Mode  </div>
              <div onClick={UserSettings(user._id)}> <FontAwesomeIcon icon={faGear}/>  Settings </div>
              <hr/>
              <div  onClick={Logout}><FontAwesomeIcon icon={faDoorOpen}/> Logout </div>
              </div> : null}
                {/* <div id='logout-btn'>
                    <button onClick={Logout}>Logout</button>
                    </div> */}
                  </div>
                  
                 </div> </div>
               : 
              <div className='nav-btn-div'>
              <div className='inner-nav-btn'>
              <button id='btn-1' onClick={SignUp}>Sign Up</button>
            </div>
              <div className='inner-nav-btn'>
              <button id='btn-2' onClick={LoginModal}>Log In</button>
              </div>
              <div className='inner-nav-btn'>
                <div className='dropdown' onClick={toggle}>
                  <FontAwesomeIcon icon={faUser}  />
                  <FontAwesomeIcon icon={faCaretDown}  />
                </div>
                </div>
              </div>
              }
              
              {isOpen ? <div className='dropdown-container'>
              <div className='mode'>  <FontAwesomeIcon icon={faMoon}  /> Dark Mode <div className='outside-circle-div'> <div className='inside-circle-div'> </div> </div> </div>
              <div> <FontAwesomeIcon icon={faQuestion}/>  Help Center </div>
              <div><FontAwesomeIcon icon={faScroll}/> Terms & Policies </div>
              <div><FontAwesomeIcon icon={faBullhorn}/> Advertise On Reddit </div>
              <hr/>
              <div><FontAwesomeIcon icon={faDoorOpen}/> Login/SignUp </div>
              </div> : null}
              {sign ? <div className='registration-modal-container'>
                <div> <FontAwesomeIcon onClick={CloseModal} icon={faXmark} id="close-icon-modal" /></div>
                <div className='inner-div-modal'>
                <div className='modal-h1'>
                <h1>Sign Up</h1>
                
                  </div>
                
                  <div className='modal-privacy'>
                  By continuing, you are setting up a Imjord Reddit account and agree to our User Agreement and Privacy Policy.
                  </div>
                  <div className='modal-form'>
                    <form>
                      <input placeholder='Email' htmlFor="email" name='email' type="email" onChange={(e) => setEmail(e.target.value)} />
                      
                    </form>
                    <button className='button-div-modal' onClick={() => setContinueSignup(true)}>Continue</button> 
                  </div>
                  <div className='bottom-modal'>
                    <h5> Already have an account? <a href='#'>Log in </a></h5>
                  </div>
                  </div>
                
                </div> : null}
               {continueSignup ? <div className='registration-modal-container'>
               <div> <FontAwesomeIcon onClick={() => setContinueSignup(false)} icon={faArrowLeft} id="back-icon-modal" /></div>
              <div> <FontAwesomeIcon onClick={CloseModal} icon={faXmark} id="close-icon-modal" /></div>
              <div className='inner-div-modal'>
              <div className='modal-h1'>
              <h2>Create your username and password</h2>
               
                </div>
               
                <div className='modal-privacy'>
                Imjordreddit is anonymous, so your username is what you’ll go by here. Choose wisely—because once you get a name, you can’t change it.
                </div>
                {msg == "User Created" ? <div className='success-msg01'> {msg} </div> : null}
                {validation ? <ul> {validation.map((errors) => {
                  return <li>{errors}</li>
                })} </ul> : null}
                <div className='modal-form'>
                  <form>
                    <input placeholder='Username' htmlFor="username" name='username' type="username" onChange={(e) => setUsername(e.target.value)} />
                    <input placeholder='Password' htmlFor="password" name='password' type="password" onChange={(e) => setPassword(e.target.value)} />
                    <div className='button-div-modal'> <button id='user-btn' type='submit' onClick={handleSubmit}>Continue</button> </div>

                  </form>
                </div>
                 </div>
              
               </div> : null}
              {log ?  
              <div className='registration-modal-container'>
                <div> <FontAwesomeIcon onClick={CloseModal} icon={faXmark} id="close-icon-modal" /></div>
                <div className='inner-div-modal'>
                <div className='modal-h1'>
                <h1>Log In</h1>
               
                </div>
               
                <div className='modal-privacy'>
                By continuing, you are setting up a Imjord Reddit account and agree to our User Agreement and Privacy Policy.
                </div>
                 {msg == "User Not Found" ? <div className='error-msg'> {msg} </div> : null }
                 {msg == "User Logged In" ? <div className='success-msg'> {msg} </div> : null}
                <div className='modal-form'>
                  <form>
                  <input placeholder='Username' htmlFor="username" name='username' type="username" onChange={(e) => setUsername(e.target.value)} />
                    <input placeholder='Password' htmlFor="password" name='password' type="password" onChange={(e) => setPassword(e.target.value)} />
                  </form>
                  <div className='button-div-modal'> <button onClick={handleLogin} >Log In</button> </div>
                </div>
                <div className='bottom-modal'>
                  <h5> Not a user? <a href='#' >Sign up! </a></h5>
                </div>
                 </div>
              
               </div> : null }
          </div>
    </nav>
  )
}

export default NavBar