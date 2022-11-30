import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Comments from "../Comments/Comments.jsx";
import CommentContainer from "../CommentContainer/CommentContainer.jsx";
import { BsArrowUpSquare } from "react-icons/bs";
import { getComments } from "../../services/Comment.js";
import { getPost } from "../../services/Posts.js";
import "./Post.css";
import TextEditor from "../TextEditor/TextEditor.jsx";

function Post() {
  const [toggle, setToggle] = useState(false);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const params = useParams();
  const filtered = comments.filter((comment) => comment.post == params.id);

  const show = () => {
    if (!toggle) return setToggle(true);
    return setToggle(false);
  };

  const fetchComments = async () => {
    const res = await getComments();
    setComments(res);
  };

  const fetchPost = async () => {
    if (!location.state) {
      const res = await getPost(params.id);
      setPost(res);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  console.log(location.state)

  return (
    <div className="single-post-container">
      
      <center>
        <div className="vote-post-flexbox">

        <div className="vote-container">
          <button id="up-arrow">
            <BsArrowUpSquare />
          </button>
          <h6>Like</h6>
          <p className="give-bread">Give Bread</p>

        </div>

          <div className='post-info-container'>
            
          <p className="posted-by">
             <span id="category-name">b/{post.category}</span> • Posted by {!location.state ? post.owner : location.state.owner} {!location.state ? post.created_at : location.state.created_at} hours ago
          </p>
              <h3 className="new-post-title">{!location.state ? post.title : location.state.title}</h3><br/>
                <p className="new-post-body">{!location.state ? post.body : location.state.body}</p>
          </div>
         
        
        </div>
        <button onClick={show}>Spread</button>
        {toggle && <div>
          <TextEditor />
        </div>}
      </center>
      <div>
        {comments.map((comment, index) => {
          return <CommentContainer comment={comment} key={index} />;
        })}
        
      </div>
    </div>
  );
}

export default Post;

