import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments.jsx";
import "./Post.css";
import { BsArrowUpSquare } from "react-icons/bs";
import { BsArrowDownSquare } from "react-icons/bs";
import { bodyRef } from "../CreatePost/CreatePost.jsx";
import { getPost, getPosts } from "../../services/Posts.jsx";


function Post() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({
    title: "",
    body: "",
    comments: [
      
    ],
  });
  const [toggle, setToggle] = useState(false);

  let { id } = useParams(); // Not available yet

  useEffect(() => {
    console.log(id); // this is where api for individual post goes
    const fetchPost = async () => {
      const posts = await getPosts()
      setPosts(posts)
    }
    fetchPost()
  }, []);

  return (
    <div className="post-container">

      <div className="posts">
    
        {posts.map((post, index) => {
          return (
            <div key={index} className='post-card'>
              <h3 className="post-title">{post.title}</h3><br/>
                <p className="post-body">{post.body}</p>
            </div>
      )
    })}
      </div>
      <div>
        <div className="vote-arrows">
          <button id="up-arrow">
            <BsArrowUpSquare />
          </button>
          <h6>vote</h6>
          <button id="down-arrow">
            <BsArrowDownSquare />
          </button>
        </div>
        <Comments setToggle={setToggle} />
      </div>
      {post.comments.map((comment, i) => (
        <h3 key={i}>{comment}</h3>
      ))}
    </div>
  );
}

export default Post
    