import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/Nav/NavBar.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Post from "./components/Post/Post.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Profile from "./pages/User/Profile.jsx";
import Chat from "./components/Chat/Chat.jsx";
import CreatePost from "./components/CreatePost/CreatePost.jsx";
import "./App.css";
import MiniChat from "./components/Chat/MiniChat.jsx";

function App() {
  const [toggleChat, setToggleChat] = useState(true);
  const [showChat, setShowChat] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <div className={`App ${theme}`}>
      <NavBar
        setShowChat={setShowChat}
        expanded={expanded}
        setExpanded={setExpanded}
        theme={theme}
        setTheme={setTheme}
      />
      <Aside theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/posts/:category" element={<Posts />} />
        <Route path="/profile/" element={<Profile />} />
      </Routes>
      {showChat &&
        (toggleChat ? (
          <MiniChat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ) : (
          <Chat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ))}
    </div>
  )
}

export default App;