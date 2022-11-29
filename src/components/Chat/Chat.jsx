import React, { useEffect, useState } from "react";
import "./Chat.css";
import { BiMessageRoundedAdd, BiSearch } from "react-icons/bi";

import { getUsers } from "../../services/user";
import ChatSearch from "./ChatSearch";

function Chat({ setToggleChat, setShowChat }) {
  const [users, setUsers] = useState(null);
  const [showUsers, setShowUsers] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");

  useEffect(() => {
    async function getAllUsers() {
      let users = await getUsers();
      setUsers(users);
      console.log(users);
    }
    getAllUsers();
  }, []);

  function checkForUser(currentInput) {
    let result = [];
    users.forEach((user) => {
      if (currentInput === "") return;
      if (user.username.toLowerCase().includes(currentInput)) {
        result.push(user);
      }
    });
    setShowUsers(result);
  }

  function handleUsernameInput(e) {
    setUsernameInput(e.target.value);
    checkForUser(e.target.value);
  }

  function handleSelectedUser(selectedUser) {
    if (!recipients.includes(selectedUser.username)) {
      setRecipients((prev) => [...prev, selectedUser.username]);
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-aside">
        <div className="chat-aside-nav">
          <h3 className="chat-aside-title">Chat</h3>
          <BiMessageRoundedAdd className="chat-new-msg"></BiMessageRoundedAdd>
        </div>
      </div>

      <ChatSearch
        recipients={recipients}
        usernameInput={usernameInput}
        handleUsernameInput={handleUsernameInput}
        showUsers={showUsers}
        handleSelectedUser={handleSelectedUser}
        setToggleChat={setToggleChat}
        setShowChat={setShowChat}
      />
    </div>
  );
}

export default Chat;
