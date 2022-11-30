import React from "react";
import { Routes, Route } from "react-router-dom";
import UserTabs from "./All-Tabs/UserTabs.jsx";
import UserPosts from "./All-Tabs/UserPosts.jsx";
import UserComments from "./All-Tabs/userComments.jsx";
import UserOverview from "./All-Tabs/userOverview";
import UserFavorites from "./All-Tabs/userFavorites.jsx";

function User() {
  return (
    <>
      <div className="user-pg">
        <div className="UserTabs">
          <UserTabs />
          <div className="user-outlet">
            <Routes>
              <Route path="/user-feed/overview" element={<UserOverview />} />
              <Route path="/user-feed/posts" element={<UserPosts />} />
              <Route path="/user-feed/comments" element={<UserComments />} />
              <Route path="/user-feed/userFavorites" element={<UserFavorites />} />
            </Routes>
          </div>
          <UserOverview />
        </div>
      </div>
    </>
  );
}

export default User;









