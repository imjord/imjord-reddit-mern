import React from "react";
import "./Trending.css";
import pic1 from "./man.png";
import pic2 from "./n.png";

const TrendingBar = () => {
  const images = {
    trending1: {
      image: pic1,
    },
    trending2: {
      image: pic2,
    },
  };
  return (
    <div className="trending-div">
      <div className="trending-title">
        <h3>Trending today</h3>
      </div>
      <div className="trending-card-div">
        <div className="trending-card">
          <div className="image-caption">
            say wat
            <p>r/ doge and more</p>
          </div>
          <img src={images.trending1.image} alt="trending image" />
        </div>
        <div className="trending-card">
          <div className="image-caption">
            {" "}
            YO
            <p>r/xqc and more</p>
          </div>

          <img src={images.trending2.image} alt="trending image" />
        </div>
      </div>
    </div>
  );
};

export default TrendingBar;
