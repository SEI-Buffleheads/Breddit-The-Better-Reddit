import React from "react";
import {Link} from "react-router-dom";
import {useAuthContext} from "../../hooks/useAuthContext";
import "bootstrap/dist/css/bootstrap.css";
import "./Aside.css";
import {GoHome} from "react-icons/go";
import {
  GiPartyPopper,
  GiBalloonDog,
  GiSlicedBread,
  GiGingerbreadMan,
  GiBread,
  GiChewedHeart,
} from "react-icons/gi";
import {RiGameLine} from "react-icons/ri";
import {
  MdOutlineSportsFootball,
  MdOutlineFastfood,
  MdOutlineMoreHoriz,
} from "react-icons/md";
import {TbBusinessplan} from "react-icons/tb";

function Aside() {
  const {user} = useAuthContext();

  return (
    <div className="aside">
      <div className="aside-link-wrapper">
        <p className="aside-wrapper-text">Feeds</p>
        <div className="aside-link-container">
          <Link to="/" className="aside-link">
            <GoHome size={24} className="aside-icon" />
          </Link>
          <Link to="/" className="aside-link">
            <p>Home</p>
          </Link>
        </div>
        {!user && (
          <div className="aside-link-container">
            <Link to="/" className="aside-link">
              <GiChewedHeart size={24} className="aside-icon" />
            </Link>
            <Link to="/" className="aside-link">
              <p>Favorites</p>
            </Link>
          </div>
        )}

        <div className="aside-link-container">
          <Link to="/" className="aside-link">
            <GiPartyPopper size={25} className="aside-icon" />
          </Link>
          <Link to="/" className="aside-link">
            <p>Popular</p>
          </Link>
        </div>
        <div className="aside-link-container">
          <Link to="/" className="aside-link">
            <GiBalloonDog size={25} className="aside-icon" />
          </Link>
          <Link to="/" className="aside-link">
            <p>All</p>
          </Link>
        </div>

        <div className="aside-link-container">
          <Link to="/" className="aside-link">
            <GiBread size={25} className="aside-icon" />
          </Link>
          <Link to="/" className="aside-link">
            <p>Happening</p>
          </Link>
        </div>
        <div className="aside-link-container">
          <Link to="/" className="aside-link">
            <GiGingerbreadMan size={25} className="aside-icon" />
          </Link>
          <Link to="/" className="aside-link">
            <p>Communities</p>
          </Link>
        </div>
      </div>
      <div className="aside-link-wrapper">
        <p className="aside-wrapper-text">Topics</p>
        <div className="aside-link-container">
          <Link to="/" className="aside-link">
            <RiGameLine size={24} className="aside-icon" />
          </Link>
          <Link to="/" className="aside-link">
            <p>Gaming</p>
          </Link>
        </div>
        <div className="aside-link-container">
          <Link to="/" className="aside-link">
            <MdOutlineSportsFootball size={25} className="aside-icon" />
          </Link>
          <Link to="/" className="aside-link">
            <p>Sports</p>
          </Link>
        </div>
        <div className="aside-link-container">
          <Link to="/" className="aside-link">
            <TbBusinessplan size={25} className="aside-icon" />
          </Link>
          <Link to="/" className="aside-link">
            <p>Business</p>
          </Link>
        </div>
        <div className="aside-link-container">
          <Link to="/" className="aside-link">
            <GiSlicedBread size={25} className="aside-icon" />
          </Link>
          <Link to="/" className="aside-link">
            <p>Crypto</p>
          </Link>
        </div>
        <div className="aside-link-container">
          <Link to="/" className="aside-link">
            <MdOutlineFastfood size={25} className="aside-icon" />
          </Link>
          <Link to="/" className="aside-link">
            <p>Food</p>
          </Link>
        </div>
        <div className="aside-link-container">
          <Link to="/" className="aside-link">
            <MdOutlineMoreHoriz size={25} className="aside-icon" />
          </Link>
          <Link to="/" className="aside-link">
            <p>More Topics</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Aside;
