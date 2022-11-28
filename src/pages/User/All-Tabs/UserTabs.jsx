import React from "react";
import User from "../User";
import { Link } from "react-router-dom";

function UserTabs() {
  return (
    <ul className="user-nav">
      <Link to="/user-feed/overview"><li className="userTab1">Overview</li></Link>
      <Link to="/user-feed/posts"><li className="userTab2">Posts</li></Link>
      <Link to="/user-feed/comments"><li className="userTab3">Comments</li></Link>
      <Link to="/user-feed/history"><li className="userTab4">History</li></Link>
      <Link to="/user-feed/saved"><li className="userTab5">Saved</li></Link>
      <Link to="/user-feed/hidden"><li className="userTab6">Hidden</li></Link>
      <Link to="/user-feed/upvote"><li className="userTab7">Upvote</li></Link>
      <Link to="/user-feed/downvote"><li className="userTab8">Downvote</li></Link>
      <Link to="/user-feed/awards"><li className="userTab9">Awards Recieved</li></Link>
    </ul>
  );
}

export default UserTabs;

{
  /* <header>
       <nav>
       <link to='/'> home </link>
          <link to='/userTab1'> tab1 </link>
         <link to='/userTab2'> tab2 </link>
         <link to='/userTab3'> tab3 </link>
         <link to='/userTab4'> tab4 </link>
         <link to='/userTab5'> tab5 </link>
         <link to='/userTab6'> tab6 </link>
         <link to='/userTab7'> tab7 </link> 
         <link to='/userTab8'> tab8 </link>
         <link to='/userTab9'> tab9 </link> 
         
       </nav>
       </header> */
}
