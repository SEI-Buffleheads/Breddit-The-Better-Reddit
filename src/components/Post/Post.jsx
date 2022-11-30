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

