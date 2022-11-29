import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments.jsx";
import "./Posts.css";
import { BsArrowUpSquare } from "react-icons/bs";
import { BsArrowDownSquare } from "react-icons/bs";
import { bodyRef } from "../CreatePost/CreatePost.jsx";
import { getPost, getPosts } from "../../services/Posts.jsx";


function Post() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({
    title: "",
    body: "",
    comments: [
      
    ],
  });
  const [toggle, setToggle] = useState(false);

  let { id } = useParams(); // Not available yet

  useEffect(() => {
    console.log(id); // this is where api for all post goes
    const fetchPosts = async () => {
      const posts = await getPosts()
      setPosts(posts)
    }
    fetchPosts()
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost()
      setPost(post)
    }
    fetchPost()
  }, []);

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
            <div key={index} className='post-card'>
              <p className="posted-by"> <span id="category-name">b/{post.category}</span> • Posted by {post.owner} at {post.created_at}</p>
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
    