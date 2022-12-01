import {useState} from "react";
import Overview from "./All-Tabs/Overview";
import ProfileComments from "./All-Tabs/ProfileComments";
import ProfilePosts from "./All-Tabs/ProfilePosts";
import "./Profile.css";

function Profile() {
  const tabs = ["Overview", "Posts", "Comments", "Favorite"];
  const [pcToggle, setPCToggle] = useState("Overview")

  const postOrComments = (link) => {
    setPCToggle(link)
  }

  return (
    <div className="profile">
      <ul className="profile-nav">
        {tabs.map((link, index) => {
          return <li className="profile-tabs" key={index} onClick={()=> {postOrComments(link)}}>{link}</li>;
        })}
      </ul>
      <div className="profile-display">
        <Overview toggle={pcToggle} />
        {pcToggle == "Comments" && <ProfileComments />}
        {pcToggle == "Posts" && <ProfilePosts />}
      </div>
    </div>
  );
}

export default Profile;
