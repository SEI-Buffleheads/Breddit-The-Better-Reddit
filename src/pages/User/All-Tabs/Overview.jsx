import "./Overview.css";
import {useAuthContext} from "../../../hooks/useAuthContext";

function Overview({toggle, theme}) {
  const {user} = useAuthContext();

  function prettyDate2(time) {
    let date = new Date(time);
    let cake = date.toLocaleDateString();
    return cake;
  }

  if (!user) return <h1>You got to join the baking crew first</h1>;

  return (
    <div
      className={`overview-container ${theme}`}
      style={{
        width: toggle === "Overview" ? "100%" : "50%",
      }}
    >
      <img src={user.banner} alt={`user-banner`} className="banner" />
      <div className="overview-center">
        <div className="overview-center-left">
          <img src={user.avatar} alt="user avatar"className="avatar" />
          {user.username.toUpperCase()}
          <div className="overview-left-btn-container">
            <button className="user-banner">Change banner</button>
            <button className="user-avatar"> Change avatar </button>
          </div>
        </div>
        <div className="overview-center-right">
          <p className="overview-tag">Bakes</p>
          <p className="tag-details">9001 Like</p>
          <p className="overview-tag">Bread Day</p>
          <p className="tag-details">{prettyDate2(user.date_joined)}</p>
          <button className="social-button">+ Add Social Link</button>
        </div>
      </div>
      <div className="New-post">
        <button className="post-button">New Post</button>
      </div>
      <div className="toaster.container">
        <div className="box-canvas">
          <div className="toast">
            <div className="toast-top"></div>
            <div className="toast-inner"></div>
          </div>
          <div className="toaster-feet"></div>
          <div className="toaster">
            <div className="toasterName"> Breaddit </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
