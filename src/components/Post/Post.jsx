import React from 'react'
import Comments from "../Comments/Comments.jsx"
import "./Post.css"

function Post() {
  return (
    <div className="Post">
      <div className="post-container">
        <div className="post-details-container">
        <div className="post-title"></div>
        <div className="post-description"></div>
        <div className="post-bottom-nav">
          <div id="post-comments-amount">XX Comments</div>
          <button id="post-share-button">Share</button>
          <button id="post-save-button">Save</button>
          <button id="post-hide-button">Hide</button>
          <button id="post-report-button">Report</button>
          </div>
        </div>
        <div className="post-comment-container">
          <input className="post-comment-input">What are your thoughts?</input>
          <button id="post-comment-button">Comment</button>
        </div>
      <Comments />
      </div>
    </div>
  )
}

export default Post