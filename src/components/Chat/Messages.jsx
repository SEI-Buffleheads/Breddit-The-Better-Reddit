import React from "react";
import { useState } from "react";

function Messages({ currentRoom, sendMessage }) {
  const [msg, setMsg] = useState("");
  console.log(currentRoom);
  return (
    <div className="messages-container">
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
