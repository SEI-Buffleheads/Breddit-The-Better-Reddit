import { useState } from "react";
import "./Comments.css";
import { ImBold } from "react-icons/im";
import { BsTypeItalic } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { GrSuperscript } from "react-icons/gr";
import { BiImageAdd } from "react-icons/bi";

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
    <div className="comments-container">

    <div onSubmit={handleSubmit} className="comments-flexbox">
      <input
        type="text"
        id="post-comment-input"
        placeholder="What are your thoughts?"
        name="body"
        value={comment.body}
        onChange={handleChange}
      />

      <div className="icons-list">
        <button id="make-text-italics">
          <BsTypeItalic />
        </button>
        <button id="make-text-bold">
          <ImBold />
        </button>
        <button id="make-text-strikethrough">
          <AiOutlineStrikethrough />
        </button>
        <button id="add-link">
          <AiOutlineLink />
        </button>
        <button id="make-text-uppercase">
          <GrSuperscript />
        </button>
        <button id="add-image">
          <BiImageAdd />
        </button>
        <button type="submit-button" id="comment-button">
          comment
        </button>
        </div>
      </div>

    </div>  
  );
}

export default Comments;
