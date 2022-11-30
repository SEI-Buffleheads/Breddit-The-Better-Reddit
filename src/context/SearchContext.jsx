import { createContext, useReducer, useEffect } from "react";

export const SearchContext = createContext();

export const searchReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        query: action.payload,
      };
    case "ALL":
      return {
        query: null,
      };
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, {
    query: null,
  });

  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};


const [allPosts, setAllPosts] = useState([]);
const queryRef = useRef()
const { dispatch, query } = useSearchContext();

const filtered = allPosts.filter((post) => {
  return post.title.toLowerCase().includes(query.toLowerCase());
});

const handleSubmit = () => {
  dispatch({ type: "SEARCH", payload: queryRef.current.value });
}

if (!Object.keys(allPosts).length) return <Loading />;

<div className="cont">
  <form>
  <input
    className="search"
    ref={queryRef}
    type="search"
  />
<button onclick={handleSubmit}>Search</button>
  </form>
{allPosts.length > 0 ? (
  <div className="items">
    {filtered.map((item, index) => {
      return <Post item={item} key={index} />;
    })}
  </div>
) : (
  <div>Loading...</div>
)}
</div>