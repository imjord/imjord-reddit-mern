import React, {useState, useEffect} from 'react'
import SearchBar from '../SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCaretDown, faRobot, faXmark, faMoon, faQuestion, faScroll, faBullhorn, faDoorOpen} from '@fortawesome/free-solid-svg-icons'
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
                    <input placeholder='Email' for="email" name='email' type="email" />
                    
                  </form>
                  <div className='button-div-modal'> <button>Continue</button> </div>
                </div>
                <div className='bottom-modal'>
                  <h5> Already have an account? <a href='#'>Log in </a></h5>
                </div>
                 </div>
              
               </div> : null}
              {log ?  <div className='registration-modal-container'>
              <div> <FontAwesomeIcon onClick={CloseModal} icon={faXmark} id="close-icon-modal" /></div>
              <div className='inner-div-modal'>
              <div className='modal-h1'>
              <h1>Log In</h1>
               
                </div>
               
                <div className='modal-privacy'>
                By continuing, you are setting up a Imjord Reddit account and agree to our User Agreement and Privacy Policy.
                </div>
                <div className='modal-form'>
                  <form>
                    <input placeholder='Email' for="email" name='email' type="email" />
                    <input placeholder='password' for="password" name='password' type="password" />
                  </form>
                  <div className='button-div-modal'> <button>Log In</button> </div>
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