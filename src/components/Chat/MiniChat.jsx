import React, { useRef } from "react";
import "./MiniChat.css";
import { AiOutlineClose } from "react-icons/ai";

function MiniChat({ setToggleChat, setShowChat }) {
  const miniChatContainer = useRef();
  function handleOpen() {
    setToggleChat(false);
  }

  function handleClose() {
    setShowChat(false);
  }

  return (
    <div ref={miniChatContainer} className="mini-chat-container">
      <p onClick={handleOpen}>Chat</p>
      <p onClick={handleClose} className="mini-chat-close-icon">
        X
      </p>
    </div>
  );
}

export default MiniChat;
