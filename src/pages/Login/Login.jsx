import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-header">Log In</h2>
        <input
          className="login-input login-username"
          placeholder="Enter Username"
          name="username"
        />
        <input
          className="login-input login-password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <button className="login-input login-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
