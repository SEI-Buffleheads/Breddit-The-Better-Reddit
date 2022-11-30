import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Posts.css";
<<<<<<< HEAD
import { getPosts } from "../../services/Posts.js";
=======
import { getPosts } from "../../services/Posts.jsx";

>>>>>>> dev
import PostContainer from "../PostContainer/PostContainer";

function Post() {
  const [posts, setPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
<<<<<<< HEAD
    <div className="post-container">
        {posts.map((post, index) => {
          return <PostContainer post={post} key={index} />;
        })}
=======
    <div className="posts-container">
      {posts.map((post, index) => {
        return <PostContainer post={post} key={index} />;
      })}
>>>>>>> dev
    </div>
  );
}

export default Post;
<<<<<<< HEAD

=======
>>>>>>> dev
