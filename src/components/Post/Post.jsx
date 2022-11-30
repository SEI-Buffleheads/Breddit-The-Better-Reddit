import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Comments from "../Comments/Comments.jsx";
import CommentContainer from "../CommentContainer/CommentContainer.jsx";
import { BsArrowUpSquare } from "react-icons/bs";
import { getComments } from "../../services/Comment.js";
import { getPost } from "../../services/Posts.js";
import "./Post.css";

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

  return (
    <div className="post-container">
      <center>
        <div className="posts">
          <div className="post-card">
            <h3 className="post-title">
              {!location.state ? post.title : location.state.title}
            </h3>
            <br />
            <p className="post-body">
              {!location.state ? post.title : location.state.title}
            </p>
          </div>
        </div>
      </center>
      <div>
        <div className="vote-arrows">
          <button id="up-arrow">
            <BsArrowUpSquare />
          </button>
          <h6>Like</h6>
        </div>
        <div className="items">
          {filtered.map((comment, index) => {
            return <CommentContainer comment={comment} key={index} />;
          })}
        </div>
        <div onClick={show}>Spread</div>
        {toggle && <Comments />}
      </div>
    </div>
  );
}

export default Post;
=======
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Comments from "../Comments/Comments.jsx";
// import "./Post.css";
// import { BsArrowUpSquare } from "react-icons/bs";
// import { BsArrowDownSquare } from "react-icons/bs";
// // import { getPost } from "../../services/Post.js";

// function Post() {
//   // const [post, setPost] = useState({
//   //   title: "",
//   //   body: "",
//   //   comments: [
      
//   //   ],
//   // });
  
//   // const [toggle, setToggle] = useState(false);


//   // useEffect(() => {
//   //   const fetchPost = async () => {
//   //     const post = await getPost(id)
//   //     setPost(post)
//   //   }
//   //   fetchPost()
//   // }, [id]);

//   return (
//     <div className="post-container">
//       <center>
//         <div className="posts">
//           <div className='post-card'>
//             <h3 className="post-title">{post.title}</h3><br />
//             <p className="post-body">{post.body}</p>
//           </div>
//         </div>
//       </center>
//       <div>
//         <div className="vote-arrows">
//           <button id="up-arrow">
//             <BsArrowUpSquare />
//           </button>
//           <h6>vote</h6>
//           <button id="down-arrow">
//             <BsArrowDownSquare />
//           </button>
//         </div>
//         <Comments setToggle={setToggle} />
//       </div>
//       {post.comments?.map((comment, i) => (
//         <h3 key={i}>{comment}</h3>
//       ))}
//     </div>
//   );
// }

// export default Post

