import React, {useState, useEffect} from "react";
import ScrollButton from "../ScrollButton/ScrollButton";
import "./Ads.css";
import pic1 from "../../assets/pic1.jpeg"
import pic2 from "../../assets/crypto.png"
import pic3 from "../../assets/music -ad.jpeg"
import pic4 from "../../assets/shoes.jpg"
import pic5 from "../../assets/mattress.jpeg"
import pic6 from "../../assets/shoes.jpg"
import pic7 from "../../assets/shoes.jpg"
import pic8 from "../../assets/shoes.jpg"
import pic9 from "../../assets/shoes.jpg"

function Ads() {
  let pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9]
  let i = 0
  const [state, setState] = useState(pics[i])

// 
  useEffect(() => { 
    setInterval(() => {
      if (i > 3) {
        i = 0
      } else {
        i += 1
      }
      
      
    setState(pics[i])
  }, 4000);
  },[])
  
  // const Cycle = () => {
  //  let finalPic = state.pics[0]
  //   state.pics.map(e => {
  //     finalPic = e;
  //   })
  //   return finalPic;
  // }
  return (
    <div className="ads-aside">
      <aside >
        <div className="ads-container">
          <p>ADVERTISEMENT</p>
          <img className="ads" src={state} alt="" /></div>
        <div className="ads-container">
          <p>ADVERTISEMENT</p>
          <img className="ads" src="https://www.gourmetads.com/wp-content/uploads/2019/05/fast-food-ads-mcdonalds-300x600.jpg" alt="" /></div>
        <div className="ads-container">
          <p>ADVERTISEMENT</p>
          <img className="ads" src="https://habitatfwb.org/wp-content/uploads/2019/09/300x600-banner-ad.jpg" alt="" /></div>
      </aside>
      <div className="reddit-inc">
       <div><a href="https://www.redditinc.com/policies/user-agreement">User Agreement</a>
        <a href="https://www.reddit.com/policies/privacy-policy">Privacy Policy</a>
        <a href="https://www.redditinc.com/policies/content-policy">Content Policy</a>
          <a href="#">Moderator Code of Conduct</a>
        </div> 
        <div>
          <a href="#">English</a>
          <a href="#">Français</a>
          <a href="#">Italiano</a>
          <a href="#">Deutsch</a>
          <a href="#">Español</a>
          <a href="#">Portugués</a>
        </div>
      </div>
      <div>
        <ScrollButton />
        </div>
      </div>
  )
}

export default Ads;