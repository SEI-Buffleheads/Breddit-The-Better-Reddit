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
<<<<<<< HEAD
import Comments from "./components/Comments/Comments.jsx";
import Post from "./components/Post/Post.jsx";
=======
import { useState } from "react";
import MiniChat from "./components/Chat/MiniChat.jsx";
import { Navbar } from "react-bootstrap";
>>>>>>> dev

function App() {
  const [toggleChat, setToggleChat] = useState(true);
  const [showChat, setShowChat] = useState(true);
  return (
    <div className="App">
<<<<<<< HEAD
      Your component goes here! Delete once ready to push
      <Post />
=======
      <Navbar setShowChat={setShowChat} />
      <Post />
      {showChat &&
        (toggleChat ? (
          <MiniChat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ) : (
          <Chat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ))}
      <Ads />
>>>>>>> dev
    </div>
  );
}

export default App;
