import React from "react";
import { useState } from "react";
import { CiMinimize1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function Messages({ currentRoom, sendMessage, setToggleChat, setShowChat }) {
  const [msg, setMsg] = useState("");
  console.log(currentRoom);

  function handleMinimize() {
    setToggleChat(true);
  }
  function handleClose() {
    setShowChat(false);
  }
  return (
    <div className="messages-container">
      <div className="chat-main-nav">
        <h3 className="chat-main-title">Chat Name</h3>
        <div className="chat-main-icons">
          <CiMinimize1
            className="chat-main-minimize"
            onClick={handleMinimize}
          />
          <AiOutlineClose onClick={handleClose} />
        </div>
      </div>
      <div className="messages-text-container">
        <p>Hey this is a text!</p>
        <p>Hey this another text!</p>
        {currentRoom.messages.map((msg) => {
          return <p>{msg}</p>;
        })}
      </div>

      <form
        className="messages-form"
        onSubmit={(e) => sendMessage(e, msg, currentRoom)}
      >
        <input value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Messages;
