import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Aside from "./components/Aside/Aside.jsx";
import ChangePw from "./pages/ChangePw/ChangePw";
import Chat from "./components/Chat/Chat.jsx";
import CreatePost from "./pages/CreatePost/CreatePost.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import MiniChat from "./components/Chat/MiniChat.jsx";
import NavBar from "./components/Nav/NavBar.jsx";
import SinglePost from "./pages/SinglePost/SingePost";
import Posts from "./pages/Posts/Posts.jsx";
import Profile from "./pages/User/Profile.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const [expanded, setExpanded] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [theme, setTheme] = useState("light");
  const [toggleChat, setToggleChat] = useState(true);
  const { user } = useAuthContext();
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
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/posts/:category" element={<Posts />} />
        <Route path="/profile/" element={<Profile theme={theme} />} />
        <Route path="/changepassword/" element={<ChangePw />} />
      </Routes>
      {user &&
        showChat &&
        (toggleChat ? (
          <MiniChat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ) : (
          <Chat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ))}
    </div>
  );
}

export default App;
