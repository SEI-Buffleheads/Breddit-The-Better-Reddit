import React from "react";
import "./Chat.css";

function InputUsers({ users, handleSelectedUser, setUsernameInput }) {
  return (
    <div className="chat-search-users-container">
      {users &&
        users.map((user) => {
          if (user.username && user.avatar) {
            return (
              <div
                key={user.id}
                className="chat-search-user-container"
                onClick={() => {
                  setUsernameInput("");
                  handleSelectedUser(user);
                }}
              >
                <img
                  src={user.avatar}
                  className="chat-search-user-avatar"
                ></img>
                <p>{user.username}</p>
              </div>
            );
          }
        })}
    </div>
  );
}

export default InputUsers;
