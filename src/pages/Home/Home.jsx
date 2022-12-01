import React from "react";
import "./Home.css";

import Posts from "../../pages/Posts/Posts";

import Ads from "../../components/Ads/Ads";

function Home() {
  return (
    <div className="home-container">
      <Posts className="home-posts" />
      <Ads className="home-ads" />
    </div>
  );
}

export default Home;
