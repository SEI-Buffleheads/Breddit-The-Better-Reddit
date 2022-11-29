import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Posts.css";
import { getPosts } from "../../services/Posts.jsx";
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
    <div className="post-container">
      {posts.map((post, index) => {
        return (
          <div key={index} className='post-card'>
            <p className="posted-by"> <span id="category-name">b/{post.category}</span> • Posted by {post.owner} at {post.created_at}</p>
            <h3 className="new-post-title">{post.title}</h3>
            <p className="new-post-body">{post.body}</p>
          </div>
        )
      })}


    </div>
        
  ); </div>  

      
    
      <Comments setToggle={setToggle} />
  
      {post.comments.map((comment, i) => (
        <h3 key={i}>{comment}</h3>
      ))}
        
    
    
    </div>
  );
}

export default Post;