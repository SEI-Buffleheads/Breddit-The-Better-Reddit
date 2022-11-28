import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments.jsx";
import "./Post.css";
import { BsArrowUpSquare } from "react-icons/bs";
import { BsArrowDownSquare } from "react-icons/bs";
import { post } from "../CreatePost/CreatePost.jsx";
import { getPost } from "../../services/Posts.jsx";

function Post() {
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
  }, [id, toggle]);

  return (
    <div className="post-container">

      <div>
    
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
    