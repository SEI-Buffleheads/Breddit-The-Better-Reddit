import "./CommentContainer.css";

function CommentContainer(props) {
  const { comment } = props;

  return (
    <div className="post-info-container">
      <p className="new-post-body">{comment.owner}</p>
        <p className="new-post-body">{comment.body}</p>
      </div>
  );
}

export default CommentContainer;
