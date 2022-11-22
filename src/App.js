import Nav from "./components/Nav/Nav.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Post from "./components/Post/Post.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Ads from "./components/Ads/Ads.jsx"
import User from "./pages/User/User.jsx";
import UserTabs from "./pages/User/All-Tabs/UserTabs.jsx";
import Chat from "./components/Chat/Chat.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <User />
      <Post />
      <Chat />
      <Ads />
    </div>
  );
}

export default App;
