import { useNavigate } from "react-router-dom";
import { BsArrowUpSquare } from "react-icons/bs";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./PostContainer.css";

function PostContainer(props) {
  const { post } = props;
  const { user } = useAuthContext();
 
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
          <p className="give-bread">Give Bread</p>
        </div>
            
      <div
        className="post-card"
        onClick={() => handleClick(post.id)}
      >
        <p className="posted-by">
          <span id="category-name">b/{post.category}</span> • Posted by {post.owner} X hours ago
        </p> 
        <h3 className="new-post-title">{post.title}</h3>
          <p className="new-post-body">{post.body}</p>
      </div>
          {user.username === post.owner && <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>}
      </div>
      </div>
  );
}

export default PostContainer;
