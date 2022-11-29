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

      <div className="posts">
    
        {posts.map((post, index) => {
          return (
            <div key={index} className='post-card' onClick={() => handleClick(post.id)}>
              <h3 className="post-title">{post.title}</h3><br/>
                <p className="post-body">{post.body}</p>
            </div>
      )
    })}
      </div>
      <div>
        <div className="vote-arrows">
          <button id="up-arrow">
            <BsArrowUpSquare />
          </button>
          <h6>vote</h6>
          <button id="down-arrow">
            <BsArrowDownSquare />
          </button>
        </div>
        <Comments setToggle={setToggle} />
      </div>
      {post.comments.map((comment, i) => (
        <h3 key={i}>{comment}</h3>
      ))}
    </div>
  );
}

export default Post
    