import { useState } from "react";
import "./Comments.css";
import TextEditor from "../TextEditor/TextEditor";

function Comments({setToggle}) {
  const [comment, setComment] = useState({
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setComment(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(comment) // replace with actual post request for comments model
    setToggle(prev => !prev)
    setComment({body: ""})
  }
  

  return (
      <div onSubmit={handleSubmit} className="comments-flexbox">
      <TextEditor 
        type="text"
        id="post-comment-input"
        placeholder="What are your thoughts?"
        name="body"
        value={comment.body}
        onChange={handleChange}
      />
        <button id="comment-button">
          comment
        </button>
        </div>
      
  );
}

export default Comments;
