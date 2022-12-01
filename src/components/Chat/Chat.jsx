import React, { useEffect, useState, useRef } from "react";
import "./Chat.css";
import { getUsers } from "../../services/user";
import ChatSearch from "./ChatSearch";
import ChatAside from "./ChatAside";
import { v4 as uuid } from "uuid";
import io from "socket.io-client";
import { useAuthContext } from "../../hooks/useAuthContext";
import Messages from "./Messages.jsx";
import { CiMinimize1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function Chat({ setToggleChat, setShowChat }) {
  const [users, setUsers] = useState(null);
  const [showUsers, setShowUsers] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");
  const { user } = useAuthContext();
  let checkRooms = JSON.parse(localStorage.getItem("chat-data"))?.rooms;
  const [allRooms, setAllRooms] = useState(checkRooms || []);
  const [currentRoom, setCurrentRoom] = useState(null);
  const textContainer = useRef();

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
  const socket = io.connect(
    "https://breddit-chat-be-production.up.railway.app/",
    {
      query: {
        id: JSON.parse(localStorage.getItem("chat-data")).id,
      },
    }
  );

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        let rooms = JSON.parse(localStorage.getItem("chat-data")).rooms.map(
          (room) => {
            return room.roomId;
          }
        );
        socket.emit("joinRooms", rooms);
      });

      socket.on("joinRoom", (roomData) => {
        localStorage.setItem("currentRoom", roomData.roomId);
        setCurrentRoom(roomData);
        let result = JSON.parse(localStorage.getItem("chat-data"));
        result.rooms.push(roomData);
        setAllRooms(result.rooms);
        localStorage.setItem("chat-data", JSON.stringify(result));
        let rooms = JSON.parse(localStorage.getItem("chat-data")).rooms.map(
          (room) => {
            return room.roomId;
          }
        );
        socket.emit("joinRooms", rooms);
      });

      socket.on("message", (data) => {
        let rooms = JSON.parse(localStorage.getItem("chat-data")).rooms.map(
          (room) => {
            if (room.roomId === data.roomId) {
              if (
                data.sentBy === JSON.parse(localStorage.getItem("chat-data")).id
              ) {
                room.messages.push([data.newMsg]);
              } else {
                room.messages.push(data.newMsg);
              }
              setCurrentRoom(room);
              return room;
            }
            return room;
          }
        );
        let result = JSON.parse(localStorage.getItem("chat-data"));
        result.rooms = rooms;
        localStorage.setItem("chat-data", JSON.stringify(result));
      });

      return () => {
        socket.off("connect");
        socket.off("joinRoom");
        socket.off("message");
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createRoom = (e) => {
    e.preventDefault();
    setUsernameInput("");
    let newRoomId = uuid();
    let myId = JSON.parse(localStorage.getItem("chat-data")).id;
    let data = {
      sendTo: [myId, ...recipients],
      roomId: newRoomId,
      rooms: JSON.parse(localStorage.getItem("chat-data")).rooms,
      from: JSON.parse(localStorage.getItem("chat-data")).id,
    };
    localStorage.setItem("currentRoom", newRoomId);
    socket.emit("createRoom", data);
    setRecipients([]);
  };

  const sendMessage = (e, msg, room) => {
    e.preventDefault();
    let data = {
      newMsg: msg,
      roomId: room.roomId,
      room: room,
      sentBy: JSON.parse(localStorage.getItem("chat-data")).id,
    };
    socket.emit("sendMessage", data);
  };

  useEffect(() => {
    async function getAllUsers() {
      let users = await getUsers();
      setUsers(users);
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
      setRecipients((prev) => [selectedUser.username, ...prev]);
    }
  }
  function handleMinimize() {
    setToggleChat(true);
  }
  function handleClose() {
    setShowChat(false);
  }

  return (
    <div className="chat-container">
      <ChatAside allRooms={allRooms} setCurrentRoom={setCurrentRoom} />
      <div className="chat-right-side">
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
        {currentRoom && (
          <Messages
            currentRoom={currentRoom}
            sendMessage={sendMessage}
            setToggleChat={setToggleChat}
            setShowChat={setShowChat}
            textContainer={textContainer}
          />
        )}
        {!currentRoom && (
          <ChatSearch
            recipients={recipients}
            usernameInput={usernameInput}
            setUsernameInput={setUsernameInput}
            handleUsernameInput={handleUsernameInput}
            showUsers={showUsers}
            handleSelectedUser={handleSelectedUser}
            setToggleChat={setToggleChat}
            setShowChat={setShowChat}
            createRoom={createRoom}
            setRecipients={setRecipients}
          />
        )}
      </div>
    </div>
  );
}

export default Chat;
