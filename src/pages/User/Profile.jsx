import React from "react";
import UserTabs from "./All-Tabs/UserTabs.jsx";
import Overview from "./All-Tabs/Overview";
import "./Profile.css";

function Profile() {
  return (
    <div className="user-pg">
      <UserTabs />
      <Overview />
    </div>
  );
}

export default Profile;
