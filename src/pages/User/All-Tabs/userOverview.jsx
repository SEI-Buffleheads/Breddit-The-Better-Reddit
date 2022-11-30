import React from "react";
import "./userOverview.css"
import UserTabs from "./UserTabs";
import "../Profile.css"

function userOverview() {
  return (
    <div className="UserOverview-container">
      <div><UserTabs /></div>
      <div className="userO-headerimg">
        <div className="userO-bannerimg"></div>
        <div className="userO-profpic-container">
          <div className="userO-profpic"></div>
          <p> username/anonymous</p>
        </div>
      </div>

      <div className='userO-create'>
      <div className="user-btn-container">
            <button className="user-banner">Change banner</button>
          <button className="user-avatar"> Change avatar </button>
          </div>
        <div className="userO-info"></div>
          <div className="user-btn-2">

            <p className="KARMS-TAG">KARMA</p>
            <p className="LIKES-TAG">1 Like</p>
            <p className="CAKE-DAY-TAG">Cake Day</p>
            <p className="DATE-TAG">November 29, 2022</p>
          </div>
        </div>
        <div className="All-links">
          <div className="add-social">
            <button className="social-button">+ Add Social Link</button>
          </div>
          <div className="New-post">
            <button className="post-button">New Post</button>
          </div>
        </div>
      </div>
  )
}

export default userOverview