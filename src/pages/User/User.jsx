import React from "react";
import UserTabs from "./All-Tabs/UserTabs.jsx";
import UserOverview from "./All-Tabs/userOverview"
import "./User.css"

function User() {
  return (
      <div className="user-pg">
          <UserTabs />
          <UserOverview />
      </div>
  );
}

export default User;