import React, {useState, useEffect} from 'react'
import SearchBar from '../SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faUser,faMugSaucer, faPlus, faBars, faGear, faUserTie, faCaretDown, faRobot, faXmark, faMoon, faQuestion, faSignsPost, faScroll, faBullhorn, faDoorOpen, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import './Nav.css';
import redditLogo from './reddit.svg';
const NavBar = (props) => {
  const {setValidation, validation, CreateUser, setMsg, loggedIn, setLoggedIn, LoginUser, msg, user, Logout} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [sign, setSign] = useState(false);
  const [log, setLog] = useState(false);
  const [continueSignup, setContinueSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userDropDown, setUserDropDown] = useState(false);
  const [phoneDropDown, setPhoneDropDown] = useState(false);
  const [mobileSelections, setMobileSelections] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);

  }

  const SignUp = () => {

    setSign(true);
    setPhoneDropDown(false);
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
    setPhoneDropDown(false);

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

  const mobileDropDown = () => {
    setPhoneDropDown(!phoneDropDown);
  }

  const showMobileSelections = () => {
    setMobileSelections(!mobileSelections);
  }




  return (
    <nav className='nav'>
        <div>
        <Link to={"/"}> <img id='logo' src={redditLogo} alt="logo"/></Link>
        </div>
        <SearchBar />
          <div className='nav-btn-div'>
              {user.length > 0 ? 
              <div className='logged-user'>
                
                <div className='user-option-container'> <Link id='link' className='community-link' to={"/communties"}> <FontAwesomeIcon icon={faMugSaucer} id="post-icon" className='coffee' />Communties</Link> </div>
                <div className='user-option-container'> <Link id='link' to={"/submit"}> <FontAwesomeIcon icon={faSignsPost} id="post-icon" /> </Link> </div>
                <div className='user-option-container'> <Link id='link' to={"/createcommunity"}> <FontAwesomeIcon icon={faPlus} id="post-icon" /> </Link> </div>
              <div className='user-container'>
                <div className="user-inner">
                <div className='user-icon'><Link id='link' to={"/profile"}> <FontAwesomeIcon icon={faUserTie}  id="user-icon" /> </Link> </div>
                <div className='username'> {user} </div>
                <div onClick={toggleUserDropDown} className='user-icon' ><FontAwesomeIcon   icon={faCaretDown} id="user-icon" /> </div>
                <div className='mobile-bars'> <FontAwesomeIcon icon={faBars} onClick={() => showMobileSelections()}  id="mobile-bars" /> </div>
                {userDropDown ? <div className='dropdown-container'>
              <div className='mode'>  <FontAwesomeIcon icon={faMoon}  /> Dark Mode  </div>
              <div> <FontAwesomeIcon icon={faGear}/>  Settings </div>
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
                <FontAwesomeIcon icon={faBars} onClick={() => mobileDropDown()} id="mobile-bars" />
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
          {phoneDropDown ? <div className='phone-dropdown-container'>
            <div className='phone-dropdown-inner'>
              <div> <button onClick={LoginModal} id='btn-1'>Log in</button> </div>
              <div> <button onClick={SignUp} id='btn-2'>Sign up</button>   </div>
              </div>
            </div> : null}
          {mobileSelections ? <div className='mobile-selection-container'>
            <div className='mobile-selection-inner'>
              <div className='btn-div-mobile'><Link to={"/communties"}><button className='mobile-btn'>Communties</button> </Link></div>
              <div className='btn-div-mobile'><Link to={"/submit"}><button className='mobile-btn'>New Post</button> </Link></div>
              <div className='btn-div-mobile'><Link to={"/createcommunity"}> <button className='mobile-btn'>New Community</button></Link></div>
              </div>
              </div> : null}
    </nav>
  )
}

export default NavBar