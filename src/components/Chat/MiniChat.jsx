import React from "react";
import "./MiniChat.css";

function MiniChat({ setToggle }) {
  function handleOpen() {
    setToggle(false);
  }

  return (
    <div onClick={handleOpen} className="mini-chat-container">
      Chat
    </div>
  );
}

export default MiniChat;
