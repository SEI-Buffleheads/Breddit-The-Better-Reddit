import React from "react";
import User from "../User";
import { Link } from "react-router-dom";

function UserTabs() {
  return (
    <ul className="user-nav">
      <Link to="/user-feed/overview"><li className="UserOverview">Overview</li></Link>
      <Link to="/user-feed/posts"><li className="UserPosts">Posts</li></Link>
      <Link to="/user-feed/comments"><li className="UserComments">Comments</li></Link>
      <Link to="/user-feed/upvote"><li className="UserUpvote">Upvote</li></Link>
    </ul>
  );
}

export default UserTabs