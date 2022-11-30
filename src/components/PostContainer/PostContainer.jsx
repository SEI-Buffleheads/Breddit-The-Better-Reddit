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
    <div className="individual-post-container">
      <div className="vote-post-flexbox">
        <div className="vote-container">
          <button id="up-arrow">
            <BsArrowUpSquare />
          </button>
<<<<<<< HEAD
          <p className="give-bread">Give Bread</p>
          {/* <button id="down-arrow">
            <BsArrowDownSquare />
          </button> */}
=======
          <h6>Like</h6>
>>>>>>> a625a1c875a67431e64b0e90d57c9e2e42bcb7a9
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
