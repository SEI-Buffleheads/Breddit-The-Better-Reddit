import React from 'react'
import "./CreatePost.css"

function CreatePost() {
  return (
    <div className="create-post-container">

      <h3 className="create-a-post">Create a post</h3>
      <hr id="line"></hr>

      <div className="post-details">
        <div className="input-flex">
          <input type="text" id="post-title" placeholder="Title"/>
          <input type="text" id="post-text" placeholder="Text (optional)" />
        </div>
        
        <div className="file-flex">
          <form action="/url" method="GET">
            <input type="file" id="file-button"/>
          </form>
        </div>

        <div className="post-button-flex">
          <button id="post-button">Post</button>
        </div>  
      </div>

    </div>
    )
  }
  
  export default CreatePost