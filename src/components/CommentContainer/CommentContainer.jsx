import "./CommentContainer.css";
import parse from "html-react-parser";

function CommentContainer(props) {
  const { comment } = props;

  return (
    <div className="comment-info-container">
      <p className="new-comment-body">{comment.owner}</p>
      {comment.body.includes("<") ? (
        <p className="new-comment-body">{parse(comment.body)}</p>
      ) : (
        <p className="new-comment-body">{comment.body}</p>
      )}
    </div>
  );
}

export default CommentContainer;
