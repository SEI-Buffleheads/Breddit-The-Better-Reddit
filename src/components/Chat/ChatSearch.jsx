import React from "react";
import InputUsers from "./InputUsers";

function ChatSearch({
  recipients,
  usernameInput,
  setUsernameInput,
  handleSelectedUser,
  handleUsernameInput,
  showUsers,
  createRoom,
  setRecipients,
}) {
  function removeRecipient(e, r) {
    let result = recipients.filter((name) => {
      return name !== r;
    });
    console.log(result);
    setRecipients(result);
  }
  return (
    <div className="chat-main">
      <div className="chat-search-container">
        <div>
          <p className="chat-search-title">SEARCH</p>
          <div className="chat-search-input-wrapper">
            <div className="chat-search-input-field">
              <div className="chat-search-recipient-container">
                {recipients.map((recipient, i) => {
                  return (
                    <span
                      onClick={(e) => removeRecipient(e, recipient)}
                      key={i}
                    >
                      {recipient}
                    </span>
                  );
                })}
              </div>
              <input
                value={usernameInput}
                name="usernameInput"
                className="chat-search-input"
                type="text"
                placeholder="Type usernames"
                onChange={(e) => handleUsernameInput(e)}
              />
            </div>
            <InputUsers
              users={showUsers}
              handleSelectedUser={handleSelectedUser}
              setUsernameInput={setUsernameInput}
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
