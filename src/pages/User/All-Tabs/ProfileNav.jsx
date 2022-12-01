import React from "react";
import { Link } from "react-router-dom";

function ProfileNav() {
  return (
    <ul className="profile-nav">
      <Link to="/profile"><li className="profile-tabs">Overview</li></Link>
      <Link to="/profile/posts"><li className="profile-tabs">Posts</li></Link>
      <Link to="/profile/comments"><li className="profile-tabs">Comments</li></Link>
      <Link to="/profile/favorites"><li className="profile-tabs">Favorites</li></Link>
    </ul>
  );
}

export default ProfileNav