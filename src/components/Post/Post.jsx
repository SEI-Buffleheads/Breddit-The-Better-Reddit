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

      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
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
    