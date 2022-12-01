import React from "react";
import { Link } from "react-router-dom";

function UserTabs() {
  return (
    <ul className="user-nav">
      <Link to="/profile"><li className="user-tabs">Overview</li></Link>
      <Link to="/profile/posts"><li className="user-tabs">Posts</li></Link>
      <Link to="/profile/comments"><li className="user-tabs">Comments</li></Link>
      <Link to="/profile/favorites"><li className="user-tabs">Favorites</li></Link>
    </ul>
  );
}

export default UserTabs