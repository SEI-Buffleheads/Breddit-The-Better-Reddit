import React, { useState } from "react";
import ScrollButton from "../ScrollButton/ScrollButton";
import "./Ads.css";


function Ads() {
  return (
    <div className="ads-aside">
      <aside >
        <div className="ads-container">
          <p>ADVERTISEMENT</p>
          <img className="ads" src="https://i.pinimg.com/originals/b0/36/40/b036409e7db643848e86858d55edd26d.png" alt="" /></div>
        <div className="ads-container">
          <p>ADVERTISEMENT</p>
          <img className="ads" src="https://www.gourmetads.com/wp-content/uploads/2019/05/fast-food-ads-mcdonalds-300x600.jpg" alt="" /></div>
        <div className="ads-container">
          <p>ADVERTISEMENT</p>
          <img className="ads" src="https://habitatfwb.org/wp-content/uploads/2019/09/300x600-banner-ad.jpg" alt="" /></div>
      </aside>
      <div className="reddit-inc">
       <div><a href="https://www.redditinc.com/policies/user-agreement">User Agreement</a>
        <a href="https://www.reddit.com/policies/privacy-policy">Privacy Policy</a>
        <a href="https://www.redditinc.com/policies/content-policy">Content Policy</a>
          <a href="#">Moderator Code of Conduct</a>
        </div> 
        <div>
          <a href="#">English</a>
          <a href="#">Français</a>
          <a href="#">Italiano</a>
          <a href="#">Deutsch</a>
          <a href="#">Español</a>
          <a href="#">Portugués</a>
        </div>
      </div>
      <div>
        <ScrollButton />
        </div>
      </div>
  )
}

export default Ads;