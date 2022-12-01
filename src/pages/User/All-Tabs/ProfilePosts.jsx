import { useState, useEffect } from "react";
import PostContainer from "../../../components/PostContainer/PostContainer";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { getPosts } from "../../../services/Posts";

function ProfilePosts() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
    
  }, []);

  const filtered = posts.filter((post) => {
    return post.owner.toLowerCase().includes(user.username);
  });


  if (!user) return <h1>Loading...</h1>;
  
  return (
    <div className="profile-posts">
      {posts.length > 0 ? (
        <div className="profile-items">
          {filtered.map((post, index) => {
            return <PostContainer post={post} key={index} />;
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProfilePosts;
