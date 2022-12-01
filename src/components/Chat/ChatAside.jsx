import React from "react";
import { BiMessageRoundedAdd, BiSearch } from "react-icons/bi";

function ChatAside({ allRooms, setCurrentRoom }) {
  function handleRoomClick(room) {
    let currRoom = JSON.parse(localStorage.getItem("chat-data")).rooms.find(
      (rm) => {
        return rm.roomId === room.roomId;
      }
    );
    setCurrentRoom(currRoom);
    localStorage.setItem("currentRoom", JSON.stringify(currRoom));
  }
  function handleShowCreateGroup() {
    setCurrentRoom(null);
  }

  return (
    <div className="chat-aside">
      <div className="chat-aside-nav">
        <h3 className="chat-aside-title">Chat</h3>
        <BiMessageRoundedAdd
          className="chat-new-room"
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
              {room.userIds.map((user) => {
                return <p>{user}, </p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChatAside;
