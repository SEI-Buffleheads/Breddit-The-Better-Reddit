import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        access: action.payload.access,
        refresh: action.payload.refresh,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        access: null,
        refresh: null,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    access: null,
    refresh: null,
    user: null,
  });

  useEffect(() => {
    const fetchUser = () => {
      const token = localStorage.getItem("token");
      const refresh = localStorage.getItem("refresh");
      const user = JSON.parse(localStorage.getItem("user"));
      if (token) {
        dispatch({ type: "LOGIN", payload: {access: token, refresh: refresh, user: user} });
      }
    };
    fetchUser();
  }, []);

  console.log("AuthCon state", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
