import React, {useState, useEffect} from 'react'
import SearchBar from '../SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved, faUser, faCaretDown} from '@fortawesome/free-solid-svg-icons'


import './Nav.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);

  }


  return (
    <nav className='nav'>
     
        <div>
        <FontAwesomeIcon icon={faFireFlameCurved} id="icon" />
        </div>
        <SearchBar />
          <div className='nav-btn-div'>
            <div className='inner-nav-btn'>
            <button id='btn-1'>Sign Up</button>
            </div>
            <div className='inner-nav-btn'>
            <button id='btn-2'>Log In</button>
            </div>
            <div className='inner-nav-btn'>
              <div className='dropdown' onClick={toggle}>
              <FontAwesomeIcon icon={faUser}  />
            <FontAwesomeIcon icon={faCaretDown}  />
              </div>
              
            </div>
            {isOpen ? <div>Opened!</div> : null}
          
       
          </div>
    </nav>
  )
}

export default NavBar