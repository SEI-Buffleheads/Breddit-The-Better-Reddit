import React from "react";
import { Routes, Route } from "react-router-dom";
import UserTabs from "./All-Tabs/UserTabs.jsx";
import UserTab1 from "./All-Tabs/userTab1.jsx";
import UserTab2 from "./All-Tabs/userTab2.jsx";
import UserTab3 from "./All-Tabs/userTab3.jsx";
import UserTab4 from "./All-Tabs/userTab4.jsx";
import UserTab5 from "./All-Tabs/userTab5.jsx";
import UserTab6 from "./All-Tabs/userTab6.jsx";
import UserTab7 from "./All-Tabs/userTab7.jsx";
import UserTab8 from "./All-Tabs/userTab8.jsx";
import UserTab9 from "./All-Tabs/userTab9.jsx";
import "./User.css";
// import props from handleClick

function User() {
  return (
    <>
      <div className="user-pg">
        <div className="UserTabs">
          <UserTabs />

          <div className="user-outlet">
            <Routes>
              <Route path="/user-feed/overview" element={<UserTab1 />} />
              <Route path="/user-feed/posts" element={<UserTab2 />} />
              <Route path="/user-feed/comments" element={<UserTab3 />} />
              <Route path="/user-feed/history" element={<UserTab4 />} />
              <Route path="/user-feed/saved" element={<UserTab5 />} />
              <Route path="/user-feed/hidden" element={<UserTab6 />} />
              <Route path="/user-feed/upvote" element={<UserTab7 />} />
              <Route path="/user-feed/downvote" element={<UserTab8 />} />
              <Route path="/user-feed/awards" element={<UserTab9 />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
