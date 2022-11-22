import React, { useRef } from "react";
import "./Chat.css";
import { BiMessageRoundedAdd, BiSearch } from "react-icons/bi";
import { CiMinimize1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function Chat() {
  const chatContainer = useRef();
  function handleMinimize() {
    chatContainer.current.style.transform = "translateY(700px)";
  }

  return (
    <div className="chat-container" ref={chatContainer}>
      <div className="chat-aside">
        <div className="chat-aside-nav">
          <h3 className="chat-aside-title">Chat</h3>
          <BiMessageRoundedAdd className="chat-new-msg"></BiMessageRoundedAdd>
        </div>
      </div>

      <div className="chat-main">
        <div className="chat-main-nav">
          <h3 className="chat-main-title">New Chat</h3>
          <div className="chat-main-icons">
            <CiMinimize1 className="chat-main-minimize" />
            <AiOutlineClose onClick={handleMinimize} />
          </div>
        </div>

        <div className="chat-search-container">
          <p className="chat-search-title">SEARCH</p>
          <div className="chat-search-input-wrapper">
            <div className="chat-search-input-field">
              <BiSearch className="chat-search-icon"></BiSearch>
              <input
                className="chat-search-input"
                type="text"
                placeholder="Type usernames"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
