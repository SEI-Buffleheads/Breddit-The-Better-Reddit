import React from "react";


const UserTabs = () => {

  return (
    // <div>User</div>
    <div className="UserTabs">
      {/* Tab nav */}
      <ul className="user-nav">
        <li>Overview</li>
        <li>Posts</li>
        <li>Comments</li>
        <li>History</li>
        <li>Saved</li>
        <li>Hidden</li>
        <li>Upvote</li>
        <li>Downvote</li>
        <li>Awards Recieved</li>
    
      </ul>
      <div className="user-outlet">
        {/* content of active tab will be display here */}
      </div>
    </div>
  )
}


export default UserTabs;