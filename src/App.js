import {Routes, Route} from "react-router-dom";
import NavBar from "./components/Nav/NavBar.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Post from "./components/Posts/Posts.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import User from "./pages/User/User.jsx";
import UserTabs from "./pages/User/All-Tabs/UserTabs.jsx";
import Chat from "./components/Chat/Chat.jsx";
import CreatePost from "./components/CreatePost/CreatePost.jsx";
import "./App.css";
import {useState} from "react";
import MiniChat from "./components/Chat/MiniChat.jsx";

function App() {
  const [toggleChat, setToggleChat] = useState(true);
  const [showChat, setShowChat] = useState(true);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="App">
      <NavBar
        setShowChat={setShowChat}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      <Aside />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post" element={<Post />} />
          <Route path="/user" element={<User />} />
          <Route path="/UserTabs" element={<UserTabs />} />
        </Routes>
        {showChat &&
          (toggleChat ? (
            <MiniChat setToggleChat={setToggleChat} setShowChat={setShowChat} />
          ) : (
            <Chat setToggleChat={setToggleChat} setShowChat={setShowChat} />
          ))}
    </div>
  );
}

export default App;
