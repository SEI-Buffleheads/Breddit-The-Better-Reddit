import React, { useEffect, useState } from "react";
import "./Chat.css";
import { getUsers } from "../../services/user";
import ChatSearch from "./ChatSearch";
import ChatAside from "./ChatAside";
import { v4 as uuid } from "uuid";
import io from "socket.io-client";
import { useAuthContext } from "../../hooks/useAuthContext";

function Chat({ setToggleChat, setShowChat }) {
  const [users, setUsers] = useState(null);
  const [showUsers, setShowUsers] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");
  const { user } = useAuthContext();

  if (!localStorage.getItem("chat-data")) {
    let data = {
      id: user.username,
      rooms: [
        {
          roomId: user.username,
          userIds: [user.username],
          messages: [],
        },
      ],
    };
    localStorage.setItem("chat-data", JSON.stringify(data));
  }

  /////////////////////////////////////////////////////////////
  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("connected to socket");
      });
    }
  });

  const createRoom = (e) => {};
  /////////////////////////////////////////////////////////////
  // const [rooms, setRooms] = useState([]);

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
      <ChatAside />

      <ChatSearch
        // setRooms={setRooms}
        recipients={recipients}
        usernameInput={usernameInput}
        handleUsernameInput={handleUsernameInput}
        showUsers={showUsers}
        handleSelectedUser={handleSelectedUser}
        setToggleChat={setToggleChat}
        setShowChat={setShowChat}
        createRoom={createRoom}
      />
    </div>
  );
}

export default Chat;
