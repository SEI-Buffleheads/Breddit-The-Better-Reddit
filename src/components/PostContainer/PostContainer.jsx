import { useNavigate } from "react-router-dom";
import { BsArrowUpSquare } from "react-icons/bs";
import { likePost, unLikePost } from "../../services/Posts.js";
import "./PostContainer.css";

function PostContainer(props) {
  const { post } = props;
  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/post/${id}`, { state: post });
  };

  const like = async () => {
      const res = await likePost({ id: post.id });
      console.log(res)
  };

  return (
    <div className="individual-post-container">
      <div className="vote-post-flexbox">
        <div className="vote-container">
          <button id="up-arrow">
            <BsArrowUpSquare />
          </button>
          <p className="give-bread" onClick={like}>
            Give Bread
          </p>
        </div>

        <div className="post-card" onClick={() => handleClick(post.id)}>
          <p className="posted-by">
            <span id="category-name">b/{post.category}</span> • Posted by{" "}
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
