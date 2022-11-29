import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments.jsx";
import "./Post.css";
import { BsArrowUpSquare } from "react-icons/bs";
import { BsArrowDownSquare } from "react-icons/bs";
import { getPost } from "../../services/Post.jsx";


function Post() {
  const [post, setPost] = useState({
    title: "",
    body: "",
    comments: [
      
    ],
  });
  
  const [toggle, setToggle] = useState(false);

  let { id } = useParams(); // Not available yet


  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id]);

  return (
 
    <div className="single-post-container">

        {/* <center> */}
        <div className="vote-post-flexbox">
          
        <div className="vote-container">
          <button id="up-arrow">
            <BsArrowUpSquare />
          </button>
          <h6>vote</h6>
          <button id="down-arrow">
            <BsArrowDownSquare />
          </button>
          </div>
          
        <div className='post-info-container'>
          <p className="posted-by">
            {" "}
             <span id="category-name">b/{post.category}</span> • Posted by{" "}
            {post.username} X hours ago
          </p>
              <h3 className="new-post-title">{post.title}</h3><br/>
                <p className="new-post-body">{post.body}</p>
            </div>
      </div>
          {/* </center> */}
      <div>
        

        
        <Comments setToggle={setToggle} />
      </div>
      {post.comments?.map((comment, i) => (
        <h3 key={i}>{comment}</h3>
      ))}
    </div>
  );
}

export default Post