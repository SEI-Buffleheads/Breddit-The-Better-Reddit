import { useState, useEffect } from "react";
import Comments from "../Comments/Comments.jsx";
import { useNavigate } from "react-router-dom";
import "./Posts.css";
import { BsArrowUpSquare } from "react-icons/bs";
import { BsArrowDownSquare } from "react-icons/bs";
import { getPosts } from "../../services/Posts.jsx";


function Post() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({
    title: "",
    body: "",
    comments: [
      
    ],
  });
  const [toggle, setToggle] = useState(false);

  // let { id } = useParams(); // Not available yet
  let navigate = useNavigate();

  useEffect(() => {
     // this is where api for all post goes
    const fetchPosts = async () => {
      const posts = await getPosts()
      setPosts(posts)
    }
    fetchPosts()
  }, []);

  const handleClick = (id) => {
     navigate(`/post/${id}`, {replace: true})
   console.log("This was clicked")
  }

  return (
    <div className="post-container">
      <div className="vote-post-flexbox">
      {/* <div> */}
        <div className="vote-container">
          <button id="up-arrow">
            <BsArrowUpSquare />
          </button>
          <h6>Vote</h6>
          <button id="down-arrow">
            <BsArrowDownSquare />
          </button>
        </div>
    
   
      {/* </div> */}

     
        <div className="post-info-container">
        {posts.map((post, index) => {
          return (
            <div key={index} className='post-card'  onClick={() => handleClick(post.id)}>
              <p className="posted-by"> <span id="category-name">b/{post.category}</span> • Posted by {post.username} X hours ago</p>
              <h3 className="new-post-title">{post.title}</h3>
              <p className="new-post-body">{post.body}</p>
            </div>
      )
    })}
        </div>
        
      </div> 
      <Comments setToggle={setToggle} />
  
      {post.comments.map((comment, i) => (
        <h3 key={i}>{comment}</h3>
      ))}
        
    
    
    </div>
  );
}

export default Post
    