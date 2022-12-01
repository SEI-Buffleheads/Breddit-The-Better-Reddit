import "./CommentContainer.css";
import parse from "html-react-parser";
import ReactTimeAgo from 'react-time-ago';


function CommentContainer(props) {
  const { comment } = props;

  return (
    <div className="comment-info-container">
      <p className="comment-posted-by">
            <span id="category-name">{comment.owner}</span> • <ReactTimeAgo date={comment.created_at} locale="en-US"/>
      </p>
      {comment.body.includes("<") ? (
        <div className="comment-body">{parse(comment.body)}</div>
      ) : (
        <p className="comment-body">{comment.body}</p>
      )}
      
    </div>
  );
}

export default CommentContainer;
