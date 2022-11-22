import {Routes, Route} from "react-router-dom";
import NavBar from "./components/Nav/NavBar.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Post from "./components/Post/Post.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Ads from "./components/Ads/Ads.jsx";
import User from "./pages/User/User.jsx";
import UserTabs from "./pages/User/All-Tabs/UserTabs.jsx";
import Chat from "./components/Chat/Chat.jsx";
import Ads from "./components/Ads/Ads"

import "./App.css";
import { useState } from "react";
import MiniChat from "./components/Chat/MiniChat.jsx";

function App() {
  const [toggleChat, setToggleChat] = useState(true);
  const [showChat, setShowChat] = useState(true);
  return (
    <div className="App">

      <NavBar setShowChat={setShowChat} />
      
      <Aside />
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
        <Route path="/UserTabs" element={<UserTabs />} />
      </Routes>
      <Post />
      {showChat &&
        (toggleChat ? (
          <MiniChat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ) : (
          <Chat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ))}
        
      <Ads />
      
    </div>
  );
}

export default App;
