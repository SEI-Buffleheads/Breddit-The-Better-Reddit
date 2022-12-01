import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createComment } from "../../services/Comment";


const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    
    ["link", "image", "video"],
    ["clean"],
    ['contain'],
		['comments-toggle'], // comment color on/off
		['comments-add'] 
  ],
};


function TextEditor() {
  const [value, setValue] = useState("")
  const bodyRef = useRef()
  const editorRef = useRef();
  const {id} = useParams()
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = {
        post: id,
        body: value,
      };
      const res = await createComment(form);
      console.log(res)
      navigate(`/posts/${id}`, {replace: true});
    }
    catch (error) {
      console.error(error);
    }
  };
  // const id = res.id
 // setValue("")
    //console.log(value); // replace with actual post request for comments model
   // setValue("")
    // setToggle((prev) => !prev);catch (error) {
  
  

  return (
    <div className="ReactQuillComponent" >
      <form onSubmit={handleSubmit} className="comments-flexbox">
        <div classname="ReactQuillStyle">
        <div style={{ display: "flex" }}>
        <ReactQuill
              theme="snow"
              placeholder="What's breadin' bro?"
          value={value}
          onChange={setValue}
          modules={modules}
          style={{ height: "3in", margin: "1em", flex: "1" }}
          ref={editorRef}
            />
            </div>
        </div>
        <div className="Comment-button">
      <button type="submit" id="comment-button">
          Comment
          </button>
          </div>
      </form>
    </div>
  );
}

export default TextEditor;
//</div><div style={{ display: "flex" }}>