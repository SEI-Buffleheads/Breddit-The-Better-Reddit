import { useNavigate } from "react-router-dom";
import { BsArrowUpSquare } from "react-icons/bs";
import "./PostContainer.css";

function PostContainer(props) {
  const { post } = props;
  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/post/${id}`, { state: post });
  };

  return (
    <div className="post-info-container">
            <div className="vote-post-flexbox">
        <div className="vote-container">
          <button id="up-arrow">
            <BsArrowUpSquare />
          </button>
          <h6>Like</h6>
        </div>
      <div
        className="post-card"
        onClick={() => handleClick(post.id)}
      >
        <p className="posted-by">
          <span id="category-name">b/{post.category}</span> • Posted by
          {post.owner} X hours ago
        </p>
        <h3 className="new-post-title">{post.title}</h3>
        <p className="new-post-body">{post.body}</p>
      </div>
      </div>
      </div>
  );
}

export default PostContainer;
