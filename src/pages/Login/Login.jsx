import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { signIn } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";

function Login() {
  const { dispatch } = useAuthContext();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      const user = await signIn(form);

      if (user.name === "AxiosError") {
        alert("Invalid Username or password");
      } else {
        dispatch({ type: "LOGIN", payload: user });
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signIn">
      <form className="signForm" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter Username"
          name="username"
          ref={usernameRef}
        />
        <input
          className="input"
          type="password"
          placeholder="Enter Password"
          name="password"
          ref={passwordRef}
        />
        <button type="submit" className="subBtn">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
