import React from "react";
// import userTab1 from "./userTab1";


// const handleClick() = this.handleClick;

const UserTabs = () => {
  return (
    <>
      {/* handleClick(e) {
        e.preventDefault()} */}
        <div className="user-pg">
    
          <div className="UserTabs">
            {/* Tab nav */}
            <ul className="user-nav">
            <li className="userTab1"
              // onClick={handleClick}
            > Overview </li>
              <li className="userTab2" 
              // onClick={handleClick}
              > Posts </li>
              <li className="userTab3" 
              // onClick={handleClick}
              >Comments</li>
              <li className="userTab4" 
              // onClick={handleClick}
              >History</li>
              <li className="userTab5" 
              // onClick={handleClick}
              >Saved</li>
              <li className="userTab6" 
              // onClick={handleClick}
              >Hidden</li>
              <li className="userTab7" 
              // onClick={handleClick}
              >Upvote</li>
              <li className="userTab8" 
              // onClick={handleClick}
              >Downvote</li>
              <li className="userTab9" 
              // onClick={handleClick}
              >Awards Recieved</li>
    
            </ul>
            <div className="user-outlet">
              {/* will render the contents of the active tab */}
            </div>
          </div>
      </div>
      </>
    )
  }
// }


export default UserTabs;