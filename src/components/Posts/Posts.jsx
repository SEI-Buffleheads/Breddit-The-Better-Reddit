import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Posts.css";
import { getPosts } from "../../services/Posts.jsx";
import { getComments} from "../../services/Comment"

import PostContainer from "../PostContainer/PostContainer";

function Post() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments();
      setComments(comments);
    };
    fetchComments();
  }, []);
  return (
    <div className="posts-container">
      {posts.map((post, index) => {
        return <PostContainer post={post} key={index} />;
      })}
    </div>
  );
}

export default Post;
