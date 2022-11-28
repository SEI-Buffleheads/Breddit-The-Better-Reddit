import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Aside.css";
import {GoHome} from "react-icons/go";
import {
  GiPartyPopper,
  GiBalloonDog,
  GiSlicedBread,
  GiGingerbreadMan,
} from "react-icons/gi";

function Aside() {
  return (
    <div className="aside">
      <div className="aside-link-wrapper">
      <div className="aside-link-container">
        <GoHome size={24} className="aside-icon" />
        <p>Home</p>
      </div>
      <div className="aside-link-container">
        <GiPartyPopper size={25} className="aside-icon" />
        <p>Popular</p>
      </div>
      <div className="aside-link-container">
        <GiBalloonDog size={25} className="aside-icon" />
        <p>All</p>
      </div>
      <div className="aside-link-container">
        <GiSlicedBread size={25} className="aside-icon" />
        <p>Happening</p>
      </div>
      <div className="aside-link-container">
        <GiGingerbreadMan size={25} className="aside-icon" />
        <p>Communities</p>
        </div>
        </div>
    </div>
  );
}

export default Aside;
