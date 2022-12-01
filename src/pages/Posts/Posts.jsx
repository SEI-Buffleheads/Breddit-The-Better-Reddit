import { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import "./Posts.css";
import { getPosts } from "../../services/Posts.js";
import PostContainer from "../../components/PostContainer/PostContainer";
import { useSearchContext } from "../../hooks/useSearchContext";
import { useAuthContext } from "../../hooks/useAuthContext";



function Post() {
  const [posts, setPosts] = useState([]);
  const { query, searchDispatch } = useSearchContext();
  const { user } = useAuthContext();
  const params = useParams()

  useEffect(() => {
    const fetchPosts = async () => {
      searchDispatch({ type: "SEARCH", payload: "" })
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, [params]);

  const filtered = posts.filter((post) => {
    let category = params.category
    if (!params.category || params.category == "all")  category = ""
    return post.category.toLowerCase().includes(category) && post.title.toLowerCase().includes(query);
  });

  if (!Object.keys(posts).length) return <h1>Loading...</h1>;

  return (
    <div className="scroll-post-container">
      {posts.length > 0 ? (
        <div className="items">
          {filtered.reverse().map((post, index) => {
            return <PostContainer post={post} key={index} />;
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Post;
