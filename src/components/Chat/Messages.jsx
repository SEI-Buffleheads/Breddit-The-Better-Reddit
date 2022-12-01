import React, { useEffect, useRef } from "react";
import { useState } from "react";

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
          sendMessage(e, msg, currentRoom);
          setMsg("");
        }}
      >
        <input value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Messages;
