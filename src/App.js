import Nav from "./components/Nav/Nav.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Post from "./components/Post/Post.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Ads from "./components/Ads/Ads.jsx";
import User from "./pages/User/User.jsx";
import Chat from "./components/Chat/Chat.jsx";

import "./App.css";
import { useState } from "react";
import MiniChat from "./components/Chat/MiniChat.jsx";
import { Navbar } from "react-bootstrap";

function App() {
  const [toggleChat, setToggleChat] = useState(true);
  const [toggleChatMini, setToggleChatMini] = useState(true);
  return (
    <div className="App">
      <Navbar setToggle={setToggleChatMini} />
      Your component goes here! Delete once ready to push
      <Post />
      {toggleChat ? (
        <MiniChat setToggle={setToggleChat} />
      ) : (
        <Chat setToggle={setToggleChat} />
      )}
      <Ads />
    </div>
  );
}

export default App;
