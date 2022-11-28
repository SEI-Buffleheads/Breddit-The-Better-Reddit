import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments.jsx";
import "./Post.css";
import { BsArrowUpSquare } from "react-icons/bs";
import { BsArrowDownSquare } from "react-icons/bs";

function Post() {
  const [post, setPost] = useState({
    title: "The Great Escape",
    body: "This is the best escape the room ever created at any NYC location!!!",
    comments: [
      "Man, this was too hard for me!",
      "I loved every puzzle! Incredible",
      "Too easy - easy peazy lemon squeezy.",
    ],
  });
  const [toggle, setToggle] = useState(false);

  let { id } = useParams(); // Not available yet

  useEffect(() => {
    console.log(id); // this is where api for individual post goes
  }, [id, toggle]);

  return (
    <div className="post-container">

      <div className="vote-post-flexbox">
      
        <div className="vote-container">
          <button id="up-arrow">
            <BsArrowUpSquare />
          </button>
          <h6>Vote</h6>
          <button id="down-arrow">
            <BsArrowDownSquare />
          </button>
        </div>
      
        <div className="post-info-container">
          <p className="posted-by"> <span id="category-name">b/Category name</span> • Posted by xxxx X hours ago</p>
          <h3 className="new-post-title">{post.title}</h3>
          <p className="new-post-body">{post.body}</p>
        </div>
        
      </div>  

      <div className="comments-container">
        <Comments setToggle={setToggle} />
  
      {post.comments.map((comment, i) => (
        <h3 key={i}>{comment}</h3>
      ))}
      </div>  
    </div>
  );

}

export default Post
    