import React from "react";
import InputUsers from "./InputUsers";
import { CiMinimize1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function ChatSearch({
  recipients,
  usernameInput,
  handleSelectedUser,
  handleUsernameInput,
  showUsers,
  setShowChat,
  setToggleChat,
  createRoom,
}) {
  return (
    <div className="chat-main">
      <div className="chat-search-container">
        <div>
          <p className="chat-search-title">SEARCH</p>
          <div className="chat-search-input-wrapper">
            <div className="chat-search-input-field">
              {recipients.map((recipient, i) => {
                return <span key={i}>{recipient}</span>;
              })}
              {/* <div> */}
              {/* <BiSearch className="chat-search-icon"></BiSearch> */}
              <input
                value={usernameInput}
                name="usernameInput"
                className="chat-search-input"
                type="text"
                placeholder="Type usernames"
                onChange={(e) => handleUsernameInput(e)}
              />
              {/* </div> */}
            </div>
            <InputUsers
              users={showUsers}
              handleSelectedUser={handleSelectedUser}
            />
          </div>
        </div>
        <div className="chat-search-buttons">
          <button
            onClick={(e) => {
              createRoom(e);
            }}
          >
            Start Group
          </button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ChatSearch;
