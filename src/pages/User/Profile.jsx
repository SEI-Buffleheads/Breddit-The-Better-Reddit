import React from "react";
import UserTabs from "./All-Tabs/UserTabs.jsx";
import UserOverview from "./All-Tabs/userOverview"
import "./Profile.css"

function Profile() {
  return (
      <div className="user-pg">
          <UserTabs />
          <UserOverview />
    
  
      </div>
  );
}

export default Profile;