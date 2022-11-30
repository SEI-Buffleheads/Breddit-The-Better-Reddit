import React from "react";
import { Link } from "react-router-dom";

function UserTabs() {
  return (
    <ul className="user-nav">
      <Link to="/user-feed/overview"><li className="user-tabs">Overview</li></Link>
      <Link to="/user-feed/posts"><li className="user-tabs">Posts</li></Link>
      <Link to="/user-feed/comments"><li className="user-tabs">Comments</li></Link>
      <Link to="/user-feed/userFavorites"><li className="user-tabs">Favorites</li></Link>
    </ul>
  );
}

export default UserTabs