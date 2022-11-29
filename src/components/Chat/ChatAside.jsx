import React from "react";
import { BiMessageRoundedAdd, BiSearch } from "react-icons/bi";

function ChatAside() {
  return (
    <div className="chat-aside">
      <div className="chat-aside-nav">
        <h3 className="chat-aside-title">Chat</h3>
        <BiMessageRoundedAdd className="chat-new-msg"></BiMessageRoundedAdd>
      </div>
    </div>
  );
}

export default ChatAside;
