import React from "react";
import { BiMessageRoundedAdd, BiSearch } from "react-icons/bi";

function ChatAside({ allRooms, setCurrentRoom }) {
  function handleRoomClick(room) {
    setCurrentRoom(room);
    console.log(room);
    localStorage.setItem("currentRoom", JSON.stringify(room));
  }
  function handleShowCreateGroup() {
    setCurrentRoom(null);
  }

  return (
    <div className="chat-aside">
      <div className="chat-aside-nav">
        <h3 className="chat-aside-title">Chat</h3>
        <BiMessageRoundedAdd
          className="chat-new-msg"
          onClick={handleShowCreateGroup}
        ></BiMessageRoundedAdd>
      </div>
      <div className="chat-aside-rooms">
        {allRooms.map((room) => {
          return (
            <div
              className="chat-aside-room"
              onClick={() => {
                handleRoomClick(room);
              }}
            >
              {room.roomId}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChatAside;
