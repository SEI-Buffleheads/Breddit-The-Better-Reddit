import { useState, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";
import ToolbarEmoji from "./ToolbarEmoji";
import EmojiBlot from "./EmojiBlot";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createComment } from "../../services/Comment";

Quill.register(
  {
    "formats/emoji": EmojiBlot,
    // "modules/emoji-toolbar": ToolbarEmoji,
    "modules/emoji-shortname": quillEmoji.ShortNameEmoji
  },
  true
);

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["emoji"],
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],

    
  ],
  "emoji-toolbar": true,
    "emoji-textarea": true,
    "emoji-shortname": true,
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
      setValue("")
      navigate(`/post/${id}`, {replace: true});
    }
    catch (error) {
      console.error(error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="comments-flexbox">
      <div style={{ display: "flex" }}>
        <ReactQuill
          theme="snow"
          placeholder="Before you comment, remember to be respectful!"
          value={value}
          onChange={setValue}
          modules={modules}
          style={{ height: "3in", margin: "1em", flex: "1" }}
          ref={editorRef}
        />
        
      </div>
      <button type="submit" id="comment-button">
          Comment
      </button>
    </form>
  );
}

export default TextEditor;