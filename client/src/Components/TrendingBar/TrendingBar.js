import React from 'react';
import './Trending.css';
import sad1 from './sad.png';
import sad2 from './n.png';

const TrendingBar = () => {

  const images = {
      trending1: {
        image: sad1
      },
      trending2: {
        image: sad2
      }
  }
  return (
    <div className='trending-div'>
        <div className='trending-title'>
            <h3>Trending today</h3>
        </div>
        <div className='trending-card-div'>
        <div className='trending-card'>
          
            <div className='image-caption'>Kill me
            <p>r/ depression and more</p></div>
          <img src={images.trending1.image} alt="trending image" />
          </div>
        <div className='trending-card'>
        <div className='image-caption'>im sad
        <p>r/ depression and more</p></div>

        <img src={images.trending2.image} alt="trending image" />

        </div>
        </div>
    </div>
  )
}

export default TrendingBar