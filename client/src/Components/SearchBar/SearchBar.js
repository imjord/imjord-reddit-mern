import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const SearchBar = () => {
  return (
    <div className='searchbar'>
       
        <input spellcheck="false" placeholder="  Search ImJord Reddit..."></input>
        <span className='mysearchicon'><FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
    </div>
  )
}

export default SearchBar