import React from "react";
import { Link } from "react-router-dom";

function UserTabs() {
  return (
    <ul className="user-nav">
      <Link to="/user-feed/overview"><li className="btn btn-border-pop">Overview</li></Link>
      <Link to="/user-feed/posts"><li className="btn btn-background-slide">Posts</li></Link>
      <Link to="/user-feed/comments"><li className="btn btn-background-circle">Comments</li></Link>
      <Link to="/user-feed/userFavorites"><li className="btn btn-border-underline">Favorites</li></Link>
    </ul>
  );
}

export default UserTabs