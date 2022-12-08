import "./Overview.css";
import { useAuthContext } from "../../../hooks/useAuthContext";

function Overview({ toggle, theme }) {
  const { user } = useAuthContext();

  function prettyDate2(time) {
    let date = new Date(time);
    let cake = date.toLocaleDateString();
    return cake;
  }

  if (!user) return <h1>You have to join the baking crew first!</h1>;

  return (
    <div
      className={`overview-container ${theme}`}
      style={{
        width: toggle == "Overview" ? "70%" : "40%"
      }}
    >
      <img src={user.banner} className="banner" />
      <div className="overview-center">
        <div className="overview-center-left">
          <img src={user.avatar} className="avatar" />
          {user.username.toUpperCase()}
          <div className="overview-left-btn-container">
            <button className="bannerButton">Change banner</button>
            <button className="avatarButton"> Change avatar </button>
          </div>
        </div>
        <div className="overview-center-right">
          <p className="overview-tag">Bakes</p>
          <p className="tag-details">9001 Likes</p>
          <p className="overview-tag">Bread Day</p>
          <p className="tag-details">{prettyDate2(user.date_joined)}</p>
          <button className="social-button">+ Add Social Link</button>
        </div>
      </div>
      <div className="New-post">
        <button className="post-button">New Post</button>
      </div>
      <div className="toaster.container">
        <div class="box-canvas">
          <div class="loader">
            <div class="loader-top"></div>
            <div class="loader-inner">
              <div class="loader-inner-text">Breaddit</div>
            </div>
          </div>
            <div class="toaster-feet"></div>
            <div class="toaster">
                <div className="toasterName">  </div>
            </div>
          </div>
        </div>
      </div>
  );
}


export default Overview;
