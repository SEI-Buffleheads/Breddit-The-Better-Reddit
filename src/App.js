import {Routes, Route} from "react-router-dom";
import NavBar from "./components/Nav/NavBar.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Posts from "./components/Post/Post.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import User from "./pages/User/User.jsx";
import Chat from "./components/Chat/Chat.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
