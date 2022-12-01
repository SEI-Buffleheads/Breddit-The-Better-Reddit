import { useState, useEffect } from "react";
import CommentContainer from "../../../components/CommentContainer/CommentContainer";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { getComments } from "../../../services/Comment";

function ProfileComments() {
  const [comments, setcomments] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchcomments = async () => {
      const comments = await getComments();
      setcomments(comments);
    };
    fetchcomments();
    
  }, []);

  const filtered = comments.filter((comment) => {
    return comment.owner.toLowerCase().includes(user.username);
  });


  if (!user) return <h1>Loading...</h1>;
  
  return (
    <div className="profile-comments">
      {comments.length > 0 ? (
        <div className="profile-items">
          {filtered.map((comment, index) => {
            return <CommentContainer comment={comment} key={index} />;
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProfileComments