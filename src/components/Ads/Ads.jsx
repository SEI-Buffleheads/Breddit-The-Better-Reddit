import React from "react";
import "./Ads.css";

function Ads() {
  return(
    <div className="ads-aside">
      <aside >
        <div><img className="ads" src="https://i.pinimg.com/originals/b0/36/40/b036409e7db643848e86858d55edd26d.png" /></div>
        <div><img className="ads" src="https://www.gourmetads.com/wp-content/uploads/2019/05/fast-food-ads-mcdonalds-300x600.jpg" /></div>
        <div><img className="ads" src="https://habitatfwb.org/wp-content/uploads/2019/09/300x600-banner-ad.jpg" /></div>
      </aside>
      <div className="reddit-inc">
       <div><a href="https://www.redditinc.com/policies/user-agreement">User Agreement</a>
        <a >Privacy Policy</a>
        <a>Content Policy</a>
          <a>Moderator Code of Conduct</a>
        </div> 
        <div>
          <a>English</a>
          <a>Français</a>
          <a>Italiano</a>
          <a>Deutsch</a>
          <a>Español</a>
          <a>Portugués</a>
        </div>
      </div>
    </div>
  )
}

export default Ads;
