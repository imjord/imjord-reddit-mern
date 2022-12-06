import React from 'react';
import loading from './loader.svg'
import './Spinner.css';

const Spinner = () => {
    return (
        <div className='spinner'> <img src={loading} alt="loading" /
        > </div>
    )
}

export default Spinner; 