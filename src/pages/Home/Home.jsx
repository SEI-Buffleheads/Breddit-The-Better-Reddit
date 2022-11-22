import React from "react";
import "./Home.css";
import test from "../../images/test-img.png"

function Home() {
  return (
    <div className="home-container">
      <div className="nav-component">Place Nav Component here! :D</div>
      <div className="trending-container">
        <div className="trending-text">Trending Today</div>
        <div className="trending-card-container">
        <div className="trending-card trending1">Platano</div>
        <div className="trending-card trending2">Con</div>
        <div className="trending-card trending3">Salami</div>
        <div className="trending-card trending4">Y Huevo</div>
      </div>
      </div>
      <div className="aside">Place Aside Component here! :D</div>
      <div className="main-container">
        <div className="posts">
          <div className="post-cards">
            <div className="post-content">
              <img alt="" src={ test } />
          </div>
          </div>
          <div className="post-cards"></div>
          <div className="post-cards"></div>
          <div className="post-cards"></div>
          <div className="post-cards"></div>
          <div className="post-cards"></div>
          <div className="post-cards"></div>
          <div className="post-cards"></div>
          <div className="post-cards"></div>
          <div className="post-cards"></div>
          <div className="post-cards"></div>
          <div className="post-cards"></div>
          <div className="post-cards"></div>
        </div>
        <div className="ads">I can't skip the ads
          <div className="ad1">
            <img alt="" src={ test }/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
