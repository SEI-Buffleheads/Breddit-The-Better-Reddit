import React from 'react'
import "./Comments.css"
import { ImBold } from "react-icons/im"
import { BsTypeItalic } from "react-icons/bs"
import { AiOutlineLink } from "react-icons/ai"
import { AiOutlineStrikethrough } from "react-icons/ai"
import {GrSuperscript} from "react-icons/gr"
import { BiImageAdd } from "react-icons/bi"
import { BsArrowUpSquare } from "react-icons/bs"
import {BsArrowDownSquare} from "react-icons/bs"


function Comments() {

  return (
    
    <div className="comments-container">
      <input type="text" id="post-comment-input" placeholder="what are your thoughts?"></input>
      
    <div className="icons-list">
        <button id="make-text-italics"> <BsTypeItalic /> </button>
        <button id="make-text-bold"> <ImBold />  </button>
        <button id="make-text-strikethrough"> <AiOutlineStrikethrough /> </button>
        <button id="add-link"> <AiOutlineLink /> </button>
        <button id="make-text-uppercase"> <GrSuperscript /> </button>
        <button id="add-image"> <BiImageAdd /> </button>
        <button id="comments">comment </button>
    </div>
      <div className="vote-arrows">
        <button id="up-arrow"> <BsArrowUpSquare /> </button>
        <h6>vote</h6>
        <button id="down-arrow"> <BsArrowDownSquare /> </button>
      </div>
      </div>
  )
}

export default Comments