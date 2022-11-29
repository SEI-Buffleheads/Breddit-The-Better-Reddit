import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import { BiMessageRoundedAdd, BiSearch } from "react-icons/bi";
import { CiMinimize1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
// import { getUsers } from "../../services/user";
// import InputUsers from "./InputUsers";

function Chat({ setToggleChat, setShowChat }) {
  const [users, setUsers] = useState(null);
  const [recipients, setRecipients] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");

  // useEffect(() => {
  //   async function getAllUsers() {
  //     let users = await getUsers();
  //     setUsers(users);
  //     console.log(users);
  //   }
  //   getAllUsers();
  // }, []);

  function handleMinimize() {
    setToggleChat(true);
  }
  function handleClose() {
    setShowChat(false);
  }

  function checkForUser() {
    users.forEach((user) => {
      // console.log(user.username.toLowerCase().includes(usernameInput));
    });
  }

  function handleUsernameInput(e) {
    setUsernameInput(e.target.value);
    checkForUser();
  }
  return (
    <div className="chat-container">
      <div className="chat-aside">
        <div className="chat-aside-nav">
          <h3 className="chat-aside-title">Chat</h3>
          <BiMessageRoundedAdd className="chat-new-msg"></BiMessageRoundedAdd>
        </div>
      </div>

      <div className="chat-main">
        <div className="chat-main-nav">
          <h3 className="chat-main-title">New Chat</h3>
          <div className="chat-main-icons">
            <CiMinimize1
              className="chat-main-minimize"
              onClick={handleMinimize}
            />
            <AiOutlineClose onClick={handleClose} />
          </div>
        </div>

        <div className="chat-search-container">
          <p className="chat-search-title">SEARCH</p>
          <div className="chat-search-input-wrapper">
            <div className="chat-search-input-field">
              {/* <BiSearch className="chat-search-icon"></BiSearch> */}
              {recipients.map((recipient, i) => {
                return <span key={i}>{recipient}</span>;
              })}
              <span>Victor</span>
              <input
                // value={usernameInput}
                name="usernameInput"
                className="chat-search-input"
                type="text"
                placeholder="Type usernames"
                // onChange={(e) => handleUsernameInput(e)}
              />
            </div>
            {/* <InputUsers users={users} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
