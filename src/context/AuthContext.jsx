import { createContext, useReducer, useEffect } from "react";
import { refreshToken, updateUser } from "../services/user.js";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUser = async () => {
      const res = await refreshToken();
      localStorage.setItem("token", res.access);
      localStorage.setItem("refresh", res.refresh);
      const user = await updateUser();
      dispatch({ type: "LOGIN", payload: user });
    };
    if (token) {
      fetchUser();
    }
  }, []);

  console.log("AuthCon state", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
