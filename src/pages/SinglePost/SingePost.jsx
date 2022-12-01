import { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import CommentContainer from "../../components/CommentContainer/CommentContainer.jsx";
import { BsArrowUpSquare } from "react-icons/bs";
import { getComments } from "../../services/Comment.js";
import { getPost, deletePost, updatePost } from "../../services/Posts.js";
import "./SinglePost.css";
import TextEditor from "../../components/TextEditor/TextEditor.jsx";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import PostContainer from "../../components/PostContainer/PostContainer.jsx";
import ReactTimeAgo from "react-time-ago";

function Post() {
  const { user } = useAuthContext();
  const titleRef = useRef();
  const bodyRef = useRef();
  const [sToggle, setSToggle] = useState(false);
  const [eToggle, setEToggle] = useState(false);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const filtered = comments.filter((comment) => comment.post == params.id);

  const showSpread = () => {
    if (!sToggle) return setSToggle(true);
    return setSToggle(false);
  };

  const showEdit = () => {
    if (!eToggle) return setEToggle(true);
    return setEToggle(false);
  };

  const deleteStuff = async () => {
    const res = await deletePost(params.id);
    console.log(res);
    navigate(`/posts/all`, { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        owner: user.id,
        title: titleRef.current.value,
        body: bodyRef.current.value,
      };
      const post = await updatePost(params.id, form);
      if (post.name === "AxiosError") {
        alert("You can't touch this");
      } else {
        const id = post.id;
        navigate(`/post/${id}`, { state: post });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchComments = async () => {
    const res = await getComments();
    setComments(res);
  };

  const fetchPost = async () => {
    if (!location.state) {
      const res = await getPost(params.id);
      setPost(res);
    } else {
      setPost(location.state);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [location]);

  if (!post) return <h1>Loading...</h1>;
  if (!comments) return <h1>Loading...</h1>;

  return (
    <div className="post-center">
      <div className="single-post-container">
        <center>
          <div className="vote-post-flexbox">
            <div className="vote-container">
              <button id="up-arrow">
                <BsArrowUpSquare />
              </button>
              <h6 className="give-bread">Give Bread</h6>
            </div>
            <div className="post-info-container">
              <p className="posted-by">
                <span id="category-name">
                  b/{!location.state ? post.category : location.state.category}
                </span>{" "}
                • Posted by{" "}
                {!location.state ? post.owner : location.state.owner}{" "}
                <ReactTimeAgo
                  date={
                    !location.state
                      ? post.created_at
                      : location.state.created_at
                  }
                  locale="en-US"
                />
              </p>
              <h3 className="new-post-title">
                {!location.state ? post.title : location.state.title}
              </h3>
              <br />
              <p className="new-post-body">
                {!location.state ? post.body : location.state.body}
              </p>
              <a
                href={!location.state ? post.link : location.state.link}
                target="_blank"
                className="post-link"
                rel="noreferrer"
              >
                {!location.state ? post.link : location.state.link}
              </a>
            </div>
          </div>
          <div className="buttons">
            <button onClick={showSpread} id="comment-button">
              Spread
            </button>
            {user && user.username == (post.owner || location.state.owner) && (
              <div>
                <button id="edit-button" onClick={showEdit}>
                  Edit
                </button>
                <button id="delete-button" onClick={deleteStuff}>
                  Delete
                </button>
              </div>
            )}
          </div>
          {sToggle && (
            <div>
              <TextEditor />
            </div>
          )}
          {eToggle && (
            <form onSubmit={handleSubmit} className="post-details">
              <div className="input-flex">
                <input
                  type="text"
                  id="post-title"
                  placeholder="Title"
                  name="title"
                  ref={titleRef}
                />
                <textarea
                  type="text"
                  id="post-text"
                  placeholder="Spread your thoughts..."
                  name="body"
                  ref={bodyRef}
                />
              </div>
              <hr id="line"></hr>
              <div className="post-button-flex">
                <button type="submit" id="post-button">
                  EDIT
                </button>
              </div>
            </form>
          )}
        </center>
        <center>
          <div className="comment-container">
            {filtered.map((comment, index) => {
              return <CommentContainer comment={comment} key={index} />;
            })}
          </div>
        </center>
      </div>
    </div>
  );
}

export default Post;
