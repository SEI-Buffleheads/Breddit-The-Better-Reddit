import React, { useEffect, useState } from "react";
import "./Chat.css";
import { getUsers } from "../../services/user";
import ChatSearch from "./ChatSearch";
import ChatAside from "./ChatAside";
import { v4 as uuid } from "uuid";
import io from "socket.io-client";
import { useAuthContext } from "../../hooks/useAuthContext";
import Messages from "./Messages.jsx";

function Chat({ setToggleChat, setShowChat }) {
  const [users, setUsers] = useState(null);
  const [showUsers, setShowUsers] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");
  const { user } = useAuthContext();
  let checkRooms = JSON.parse(localStorage.getItem("chat-data"))?.rooms;
  const [allRooms, setAllRooms] = useState(checkRooms || []);
  const [currentRoom, setCurrentRoom] = useState(null);

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
  const socket = io.connect("http://localhost:5000/", {
    query: {
      id: JSON.parse(localStorage.getItem("chat-data")).id,
    },
  });

  /////////////////////////////////////////////////////////////
  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("connected to socket");
        let rooms = JSON.parse(localStorage.getItem("chat-data")).rooms.map(
          (room) => {
            return room.roomId;
          }
        );
        console.log(rooms);
        socket.emit("joinRooms", rooms);
      });

      socket.on("joinRoom", (roomData) => {
        localStorage.setItem("currentRoom", roomData.roomId);
        setCurrentRoom(roomData);
        console.log(roomData);
        let result = JSON.parse(localStorage.getItem("chat-data"));
        result.rooms.push(roomData);
        setAllRooms(result.rooms);
        console.log(result.rooms);
        localStorage.setItem("chat-data", JSON.stringify(result));
        let rooms = JSON.parse(localStorage.getItem("chat-data")).rooms.map(
          (room) => {
            return room.roomId;
          }
        );
        console.log(rooms);
        socket.emit("joinRooms", rooms);
      });

      socket.on("message", (data) => {
        let msgRoomId = data.roomId;
        let rooms = JSON.parse(localStorage.getItem("chat-data")).rooms.map(
          (room) => {
            if (room.roomId === msgRoomId) {
              return data.room;
            } else {
              return room;
            }
          }
        );
        console.log(allRooms);
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
  }, []);

  const createRoom = (e) => {
    e.preventDefault();
    let newRoomId = uuid();
    let myId = JSON.parse(localStorage.getItem("chat-data")).id;
    // console.log(JSON.parse(localStorage.getItem("chat-data")).rooms);
    let data = {
      sendTo: [myId, ...recipients],
      roomId: newRoomId,
      rooms: JSON.parse(localStorage.getItem("chat-data")).rooms,
      from: JSON.parse(localStorage.getItem("chat-data")).id,
    };
    localStorage.setItem("currentRoom", newRoomId);
    socket.emit("createRoom", data);
  };

  const sendMessage = (e, msg, room) => {
    console.log("sendmessage function");
    e.preventDefault();
    room.messages.push(msg);
    let data = {
      roomId: room.roomId,
      room: room,
    };

    socket.emit("sendMessage", data);
  };
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
      <ChatAside allRooms={allRooms} setCurrentRoom={setCurrentRoom} />
      {currentRoom && (
        <Messages currentRoom={currentRoom} sendMessage={sendMessage} />
      )}
      {!currentRoom && (
        <ChatSearch
          recipients={recipients}
          usernameInput={usernameInput}
          handleUsernameInput={handleUsernameInput}
          showUsers={showUsers}
          handleSelectedUser={handleSelectedUser}
          setToggleChat={setToggleChat}
          setShowChat={setShowChat}
          createRoom={createRoom}
        />
      )}
    </div>
  );
}

export default Chat;
