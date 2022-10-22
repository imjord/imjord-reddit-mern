import React from 'react';
import './Trending.css';

const TrendingBar = () => {
  return (
    <div className='trending-div'>
        <div className='trending-title'>
            <h3>Trending today</h3>
        </div>
        <div className='trending-card-div'>
        <div className='trending-card'>
        Trending Post 1
        </div>
        <div className='trending-card'>
        Trending Post 2

        </div>
        </div>
    </div>
  )
}

export default TrendingBar