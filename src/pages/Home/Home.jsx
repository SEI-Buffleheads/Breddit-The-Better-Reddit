import React from "react";
import "./Home.css";
import test from "../../images/test-img.png"

function Home() {
  return (
    <div className="home-container">
      <div className="nav-component">navvvv</div>
      <div className="trending-container">
        <div className="trending-text">Trending Today</div>
        <div className="trending-card-container">
        <div className="trending-card trending1">trending1</div>
        <div className="trending-card trending2">trending2</div>
        <div className="trending-card trending3">trending3</div>
        <div className="trending-card trending4">trending4</div>
      </div>
      </div>
      <div className="aside">ASIDEEEE</div>
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
        <div className="ads">I can't skip the ads</div>
      </div>
    </div>
  );
}
export default Home;
