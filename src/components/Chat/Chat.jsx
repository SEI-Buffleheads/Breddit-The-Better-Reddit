import React from "react";
import "./Chat.css";
import { BiMessageRoundedAdd, BiSearch } from "react-icons/bi";
import { CiMinimize1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function Chat() {
  return (
    <div className="chat-container">
      <div className="chat-aside">
        <h3 className="chat-aside-title">Chat</h3>
        <BiMessageRoundedAdd className="chat-new-msg"></BiMessageRoundedAdd>
      </div>

      <div className="chat-main">
        <h3 className="chat-main-header">New Chat</h3>
        <div className="chat-main-icons">
          <CiMinimize1 className="chat-main-minimize" />
          <AiOutlineClose />
        </div>

        <div className="chat-search-container">
          <p className="chat-search-title">SEARCH</p>
          <div className="chat-search-input">
            <BiSearch className="chat-search-icon"></BiSearch>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
