import "./CommentContainer.css";
import parse from 'html-react-parser';


function CommentContainer(props) {
  const { comment } = props;
  
  console.log(comment.body)

  return (
    <div className="post-info-container">
      <p className="category-name">Posted by {comment.owner}</p>
      {comment.body.includes("<") ? (
        parse(comment.body)
      ) : (
        <p className="new-post-body">{comment.body}</p>
      )}
      
    </div>
  );
}

export default CommentContainer;
