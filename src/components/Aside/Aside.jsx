import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Aside.css";
import {GoHome} from "react-icons/go";

function Aside() {
  return (
    <div className="aside">
      <GoHome size={22} className="aside-icon" />
    </div>
  );
}

export default Aside;
