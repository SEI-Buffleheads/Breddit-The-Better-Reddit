import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import "bootstrap/dist/css/bootstrap.css";
import "./Aside.css";
import "../../darkmode.css";
import {
  GiChewedHeart,
} from "react-icons/gi";
import {
  MdOutlineMoreHoriz,
} from "react-icons/md";
import categoryOptions from "../../assets/categories";
import feed from "../../assets/feedOptions";
// import { icons } from "react-icons/lib";

function Aside({ theme }) {
  const { user } = useAuthContext();
  return (
    <div className={`aside ${theme}`}>
      <div className="aside-link-wrapper">
        <p className="aside-wrapper-text">Feeds</p>
        {feed.map((feed, index) => {
          return (
            <div className="aside-link-container" key={index}>
              <Link to={feed.params} className="aside-link">
                {feed.icon}
              </Link>
              <Link to={feed.params} className="aside-link">
                <p>{feed.title}</p>
              </Link>
            </div>
          );
        })}
        {user && (
          <div className="aside-link-container">
            <Link to="/posts/all" className="aside-link">
              <GiChewedHeart size={24} className="aside-icon" />
            </Link>
            <Link to="/posts/all" className="aside-link">
              <p>Favorites</p>
            </Link>
          </div>
        )}
      </div>
      <div className="aside-link-wrapper">
        <p className="aside-wrapper-text">Topics</p>
        {categoryOptions.map((option, index) => {
          return (
            <div className="aside-link-container" key={index}>
              <Link to={`/posts/${option.category}`} className="aside-link">
                {option.icon}
              </Link>
              <Link to={`/posts/${option.category}`} className="aside-link">
                <p>{option.title}</p>
              </Link>
            </div>
          );
        })}
        <div className="aside-link-container">
          <Link to="/posts/more" className="aside-link">
            <MdOutlineMoreHoriz size={25} className="aside-icon" />
          </Link>
          <Link to="/posts/more" className="aside-link">
            <p>More Topics</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Aside;