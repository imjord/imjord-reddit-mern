import React, {useState, useEffect} from 'react'
import SearchBar from '../SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCaretDown, faRobot, faXmark} from '@fortawesome/free-solid-svg-icons'
import SignUp from '../Registration/SignUp';

import './Nav.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sign, setSign] = useState(false);
  const [log, setLog] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);

  }

  const SignUp = () => {

    setSign(true);
  }

  const CloseModal = () => {
    setLog(false);
    setSign(false);
  }

  const LoginModal = () => {
    setLog(true);
  }

  return (
    <nav className='nav'>
        <div>
        <FontAwesomeIcon icon={faRobot} id="icon" />
        </div>
        <SearchBar />
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
            {isOpen ? <div>Opened!</div> : null}
            {sign ? <div className='registration-modal-container'>
              <div> <FontAwesomeIcon onClick={CloseModal} icon={faXmark} id="close-icon-modal" /></div>
              <div className='inner-div-modal'>
                
              <div>
              <h1>Sign Up</h1>
                <p>We're all going to die</p>
                </div>
               
                <div>
                  <button> continue with google</button> 
                  <button> continue with apple</button> 
                </div>
                <div>
                  <h3>OR</h3>
                </div>
                <div>
                  <form>
                    <input placeholder='Email' for="email" name='email' type="email" />
                    <button>Continue</button>
                  </form>
                </div>
                <div>
                  <h5> Already have an account? <a href='#'>Log in </a></h5>
                </div>
                 </div>
              
               </div> : null}
              {log ?  <div className='registration-modal-container'>
              <div> <FontAwesomeIcon onClick={CloseModal} icon={faXmark} id="close-icon-modal" /></div>
              <div className='inner-div-modal'>
                
              <div>
              <h1>Login</h1>
                <p>We're all going to die</p>
                </div>
               
                <div>
                  <button> continue with google</button> 
                  <button> continue with apple</button> 
                </div>
                <div>
                  <h3>OR</h3>
                </div>
                <div>
                  <form>
                    <input placeholder='Email' htmlFor="email" name='email' type="email" />
                    <input placeholder='Password' htmlFor="password" name='password' type="password" />
                    <button>Login</button>
                  </form>
                </div>
                <div>
                  <h5> Dont have an account? <a href='#'>Sign up! </a></h5>
                </div>
                 </div>
              
               </div> : null }
          </div>
    </nav>
  )
}

export default NavBar