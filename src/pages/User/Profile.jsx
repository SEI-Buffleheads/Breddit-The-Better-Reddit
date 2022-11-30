import React from "react";
import UserOverview from "./All-Tabs/userOverview"
import "./Profile.css"

function Profile() {
  return (
      <div className="user-pg">
          <UserOverview />
          {/* <UserTabs /> */}
    
  
      </div>
  );
}

export default Profile;