import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2 className="signup-header">Sign Up</h2>

        <input
          className="signup-username signup-input"
          type="text"
          placeholder="Enter Username"
          name="username"
        />

        <input
          className="signup-email signup-input"
          type="email"
          placeholder="Enter Email"
          name="email"
        />

        <input
          className="signup-password signup-input"
          type="password"
          minLength="8"
          placeholder="Enter Password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}"
        />

        <input
          className="signup-confirm-password signup-input"
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
        />

        <button className="signup-submit signup-input" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
