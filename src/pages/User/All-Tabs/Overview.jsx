import React from "react";
import "./Overview.css";
import { useAuthContext } from "../../../hooks/useAuthContext";

function Overview() {
  const { user } = useAuthContext();

  function prettyDate2(time) {
    let date = new Date(parseInt(time));
    let cake = date.toLocaleDateString();
    return cake;
  }

  if (!user) return <h1>Loading...</h1>;

  return (
    <div className="overview-container">
      <img src={user.banner} className="banner" />
      <div className="profile-center">
        <div className="profile-center-left">
          <img src={user.avatar} className="avatar" />
          {user.username.toUpperCase()}
          <div className="profile-left-btn-container">
            <button className="user-banner">Change banner</button>
            <button className="user-avatar"> Change avatar </button>
          </div>
        </div>
        <div className="profile-center-right">
          <p className="profile-tag">Bakes</p>
          <p className="tag-details">9001 Like</p>
          <p className="profile-tag">Bread Day</p>
          <p className="tag-details">{prettyDate2(user.date_joined)}</p>
          <button className="social-button">+ Add Social Link</button>
        </div>
      </div>
      <div className="New-post">
        <button className="post-button">New Post</button>
      </div>
    </div>
  );
}

export default Overview;
