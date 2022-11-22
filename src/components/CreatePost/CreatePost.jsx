import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post); // replace this with actual api call
    navigate("/");
  };

  return (
    <div className="entire-page">
      <div className="create-post-container">
        <h3 className="create-a-post">Create a post</h3>
        <hr id="line"></hr>

        <form onSubmit={handleSubmit} className="post-details">
          <div className="input-flex">
            <input
              type="text"
              id="post-title"
              placeholder="Title"
              name="title"
              value={post.title}
              onChange={handleChange}
            />
            <input
              type="text"
              id="post-text"
              placeholder="Text (optional)"
              name="body"
              value={post.body}
              onChange={handleChange}
            />
          </div>

          <hr id="line"></hr>

          <div className="post-button-flex">
            <button type="submit" id="post-button">Post</button>
          </div>
        </form>
      </div>

      <div className="rules-container">
        <h4>Posting to Breddit</h4>
        <ol className="rules-list">
          <li>Remember the human</li>
          <li>Behave like you would in real life</li>
          <li>Look for the original source of content</li>
          <li>Search for duplicates before posting</li>
          <li>Read the community rules</li>
        </ol>
      </div>
    </div>
  );
}

export default CreatePost;

{
  /* <div className="file-flex">
          <form action="/url" method="GET" >
            <input type="file" id="file-button"/>
          </form>
        </div> */
}
