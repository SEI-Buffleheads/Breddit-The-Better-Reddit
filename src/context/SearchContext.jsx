import { createContext, useReducer } from "react";

export const SearchContext = createContext();

export const searchReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        query: action.payload,
      };
    case "ALL":
      return {
        query: "",
      };
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, searchDispatch] = useReducer(searchReducer, {
    query: "",
  });

  return (
    <SearchContext.Provider value={{...state, searchDispatch}}>
      {children}
    </SearchContext.Provider>
  );
};

