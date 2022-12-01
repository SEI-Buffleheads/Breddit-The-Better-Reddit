import {useNavigate} from "react-router-dom";
import {BsArrowUpSquare} from "react-icons/bs";
import {likePost, unLikePost} from "../../services/Posts.js";
import {useAuthContext} from "../../hooks/useAuthContext";
import "./PostContainer.css";
import ReactTimeAgo from "react-time-ago";

function PostContainer(props) {
  const {post} = props;
  const {user} = useAuthContext();

  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/post/${id}`, {state: post});
  };

  const like = async () => {
    const res = await likePost({id: post.id});
  };

  if (!post) return <h1>Loading...</h1>;

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

        <div
          className="post-info-container"
          onClick={() => handleClick(post.id)}
        >
          <p className="posted-by">
            <span id="category-name">b/{post.category}</span> • Posted by{" "}
            {post.owner} <ReactTimeAgo date={post.created_at} locale="en-US" />
          </p>
          <h3 className="new-post-title">{post.title}</h3>
          <p className="new-post-body">{post.body}</p>
          <a href={post.link} target="_blank" className="post-link">
            {post.link}
          </a>
        </div>
      </div>
      <div className="view-comments-flexbox">
        <button className="view-comments" onClick={() => handleClick(post.id)}>
          View Comments
        </button>
      </div>

      <img src={post.link.thumbnail} />
    </div>
  );
}

export default PostContainer;
