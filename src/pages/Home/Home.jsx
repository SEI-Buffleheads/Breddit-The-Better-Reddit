import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="trending-component">
        <div className="trending-cards trending1">trending1</div>
        <div className="trending-cards trending2">trending2</div>
        <div className="trending-cards trending3">trending3</div>
        <div className="trending-cards trending4">trending4</div>
      </div>
      <div className="aside">ASIDEEEE</div>
      <div className="main-container">
        <div className="posts">
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
