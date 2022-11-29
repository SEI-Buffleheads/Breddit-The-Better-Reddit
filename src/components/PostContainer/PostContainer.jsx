import { useNavigate } from "react-router-dom";
import { BsArrowUpSquare } from "react-icons/bs";
import { BsArrowDownSquare } from "react-icons/bs";
import "./PostContainer.css";

function PostContainer(props) {
  const { post, key } = props;
  console.log(post);
  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/post/${id}`, { state: post });
    console.log("This was clicked");
  };

  return (
    <div className="individual-post-container">
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
      <div
        key={key}
        className="post-card"
        onClick={() => handleClick(post.id)}
      >
        <p className="posted-by">
          {" "}
          <span id="category-name">b/{post.category}</span> • Posted by{" "}
          {post.username} X hours ago
        </p>
        <h3 className="new-post-title">{post.title}</h3>
        <p className="new-post-body">{post.body}</p>
      </div>
      </div>
      </div>
  );
}

export default PostContainer;