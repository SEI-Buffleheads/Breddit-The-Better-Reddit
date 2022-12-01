import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
import { createPost } from "../../services/Posts.js";
import { useAuthContext } from "../../hooks/useAuthContext";
import categoryOptions from "../../assets/categories";

function CreatePost() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const linkRef = useRef();
  const categoryRef = useRef();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        owner: user.id,
        title: titleRef.current.value,
        body: bodyRef.current.value,
        link: !linkRef.current.value
          ? "https://freshlybakedcompany.com/"
          : linkRef.current.value,
        category: !categoryRef.current.value
          ? "bakery"
          : categoryRef.current.value,
      };
      const post = await createPost(form);
      const id = post.id;
      navigate(`/post/${id}`, { state: post });
    } catch (error) {
      console.error(error);
    }
  };

  // if (!user) return <h1>Loading...</h1>;

  return (
    <div className="entire-page">
      <div className="create-post-container">
        <h3 className="create-a-post">Create a post</h3>
        <hr id="line"></hr>
        <form onSubmit={handleSubmit} className="post-details">
          <div className="input-flex">
            <input
              type="text"
              id="post-title"
              placeholder="Title"
              name="title"
              ref={titleRef}
            />
            <textarea
              type="text"
              id="post-text"
              placeholder="Spread your thoughts..."
              name="body"
              ref={bodyRef}
            />
            <input
              type="url"
              id="post-link"
              placeholder="Link (optional)"
              name="link"
              ref={linkRef}
            />
            <select
              name="category"
              className="select"
              ref={categoryRef}
              id="post-category"
              placeholder="Category (optional)"
            >
              {categoryOptions.map((option, index) => {
                return <option value={option.category} key={index}>{option.title}</option>;
              })}
            </select>
          </div>
          <hr id="line"></hr>
          <div className="post-button-flex">
            <button type="submit" id="post-button">
              Post
            </button>
          </div>
        </form>
      </div>

      <div className="rules-container">
        <h5 className="posting-to-breddit">Posting to Breddit</h5>
        <ol className="rules-list">
          <li id="list">Remember the human</li>
          <li id="list">Behave like you would in real life</li>
          <li id="list">Look for the original source of content</li>
          <li id="list">Search for duplicates before posting</li>
          <li id="list">Read the community rules</li>
        </ol>
        <div className="etiquitte">
          Please be mindful of breddit's content policy and practice good
          breddiquette.
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
