import "./Signup.css";
import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { dispatch } = useAuthContext();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      passwordRef.current.value !== confirmRef.current.value ||
      passwordRef.current.value.length < 8
    ) {
      alert("Please use a valid password.");
    } else {
      try {
        const form = {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        };
        const user = await signUp(form);
        dispatch({ type: "LOGIN", payload: user });
        navigate("/", { replace: true });
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="signup-center">
      <form onSubmit={handleSubmit} className="signup-container">
        <div className="signup-form">
          <h1 className="signup-header">Sign Up</h1>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            ref={usernameRef}
            className="signup-input"
          />
          <input
            className="signup-input"
            type="password"
            minLength="8"
            placeholder="Enter Password"
            name="password"
            ref={passwordRef}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}"
          />

          <input
            className="signup-input"
            type="password"
            ref={confirmRef}
            name="passwordConfirm"
            placeholder="Confirm Password"
          />
          <button className="signup-submit" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
