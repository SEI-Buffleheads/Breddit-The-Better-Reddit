import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw Error("Context must be inside a Provider");
  }
  return context;
};
