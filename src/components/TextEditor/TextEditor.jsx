import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

    ["clean"],
  ],
};

function TextEditor() {
  const editorRef = useRef();
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("")
  };

  return (
    <form onSubmit={handleSubmit} className="comments-flexbox">
      <div style={{ display: "flex" }}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          style={{ height: "3in", margin: "1em", flex: "1" }}
          ref={editorRef}
        />
      </div>
      <button type="submit" id="comment-button">
          comment
      </button>
    </form>
  );
}

export default TextEditor;
