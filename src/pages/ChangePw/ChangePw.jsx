import "./ChangePw.css";
import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { changePW } from "../../services/user";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const { dispatch } = useAuthContext();
  const oldPasswordRef = useRef();
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
          old_password: oldPasswordRef.current.value,
          new_password: passwordRef.current.value,
        };
        const res = await changePW(form);
        dispatch({type: "LOGOUT"});
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
          <h1 className="signup-header">Change Password</h1>
          <input
            className="signup-input"
            type="password"
            placeholder="Enter Current Password"
            name="oldPassword"
            ref={oldPasswordRef}
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
            Submit Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
