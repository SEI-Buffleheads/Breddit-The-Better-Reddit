import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { CiMinimize1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function Messages({
  currentRoom,
  sendMessage,
  setToggleChat,
  setShowChat,
  textContainer,
}) {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    textContainer.current.scrollTop = textContainer.current.scrollHeight + 100;
  }, [currentRoom]);

  return (
    <div className="messages-container">
      <div className="messages-text-container" ref={textContainer}>
        {currentRoom.messages.map((msg) => {
          return Array.isArray(msg) ? (
            <p className="sent-from-me">{msg[0]}</p>
          ) : (
            <p>{msg}</p>
          );
        })}
      </div>
      <form
        className="messages-form"
        onSubmit={(e) => {
          // this does not work because you are changing the height before the message is received

          sendMessage(e, msg, currentRoom);
        }}
      >
        <input value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Messages;
