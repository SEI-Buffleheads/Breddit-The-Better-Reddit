import React, { useState, useEffect } from "react";
import ScrollButton from "../ScrollButton/ScrollButton";
import "./Ads.css";
import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/crypto.png";
import pic3 from "../../assets/music-ad.jpeg";
import pic4 from "../../assets/shoes.jpg";
import pic5 from "../../assets/mattress.jpeg";
import pic6 from "../../assets/bank.jpeg";
import pic7 from "../../assets/flights.jpeg";
import pic8 from "../../assets/nord.jpeg";
import pic9 from "../../assets/dogs.jpeg";

function Ads() {
  let pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];
  let i = 0;
  const [state, setState] = useState(pics[i]);
  const [cycle, setCycle] = useState(pics[i]);
  const [rotate, setRotate] = useState(pics[i]);

  useEffect(() => {
    setInterval(() => {
      setState(pics[i]);
      if (i >= 8) {
        i = 0;
      } else {
        i += 1;
      }
    }, 3000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCycle(pics[i]);
      if (i >= 8) {
        i = 2;
      } else {
        i += 1;
      }
    }, 3000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setRotate(pics[i]);
      if (i >= 8) {
        i = 1;
      } else {
        i += 1;
      }
    }, 3000);
  }, []);

  return (
    <div className="ads-aside">
      <aside>
        <div className="ads-container">
          <p>ADVERTISEMENT</p>
          <img className="ads" src={state} alt="" />
        </div>
        <div className="ads-container">
          <p>ADVERTISEMENT</p>
          <img className="ads" src={cycle} alt="" />
        </div>
        <div className="ads-container">
          <p>ADVERTISEMENT</p>
          <img className="ads" src={rotate} alt="" />
        </div>
      </aside>
      <div className="reddit-inc">
        <div className="ad-links">
          <a href="https://www.redditinc.com/policies/user-agreement">
            User Agreement
          </a>
          <a href="https://www.reddit.com/policies/privacy-policy">
            Privacy Policy
          </a>
          <a href="https://www.redditinc.com/policies/content-policy">
            Content Policy
          </a>
          <a href="#">Moderator Code of Conduct</a>
        </div>
        <hr></hr>
        <div className="ad-lang">
          <a href="#">English</a>
          <a href="#">Français</a>
          <a href="#">Italiano</a>
          <a href="#">Deutsch</a>
          <a href="#">Español</a>
          <a href="#">Portugués</a>
        </div>
        <hr></hr>
      <p>Better-Reddit Inc © 2022. All rights reserved</p>
      </div>
      <div>
        <ScrollButton />
      </div>
    </div>
  );
}

export default Ads;
