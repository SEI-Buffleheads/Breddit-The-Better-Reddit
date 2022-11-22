import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./ScrollButton.css";

function ScrollButton() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="top-to-btm">
      {showBtn && (
        <FaAngleUp className="icon"onClick={goToTop}/>
      )}
    </div>
  );
}

export default ScrollButton;