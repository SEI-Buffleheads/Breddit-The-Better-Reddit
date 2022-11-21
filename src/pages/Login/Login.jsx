import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h2 className="login-header">Log In</h2>
      <form className="login-form">
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
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
