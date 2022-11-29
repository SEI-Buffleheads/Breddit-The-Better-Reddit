import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav/NavBar.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Post from "./components/Post/Post.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import User from "./pages/User/User.jsx";
import Chat from "./components/Chat/Chat.jsx";
import CreatePost from "./components/CreatePost/CreatePost.jsx";
import "./App.css";
import { useState } from "react";
import MiniChat from "./components/Chat/MiniChat.jsx";
import UserUpvotes from "./pages/User/All-Tabs/UserUpvotes"
import UserPosts from "./pages/User/All-Tabs/UserPosts";
import UserComments from "./pages/User/All-Tabs/userComments";
import UserOverview from "./pages/User/All-Tabs/userOverview"


function App() {
  const [toggleChat, setToggleChat] = useState(true);
  const [showChat, setShowChat] = useState(true);
  return (
    <div className="App">
      <NavBar setShowChat={setShowChat} />
      <Aside />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/user" element={<User />} />
        <Route path="/user-feed/overview" element={<UserOverview />} />
              <Route path="/user-feed/posts" element={<UserPosts />} />
              <Route path="/user-feed/comments" element={<UserComments/>} />
              <Route path="/user-feed/upvotes" element={<UserUpvotes />} />
      </Routes>
      {showChat &&
        (toggleChat ? (
          <MiniChat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ) : (
          <Chat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ))}
    </div>
  );

  // ignore

  // let bg = new Trianglify({
  //   noiseIntensity: 0,
  //   cellsize: 50,
  //   cellpadding: 10,
  //   fillOpacity: 1,
  //   strokeOpacity: 0
  // });
  
  // let pattern = bg.generate(document.body.clientWidth, document.body.clientHeight);
  // document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);

}

export default App;
