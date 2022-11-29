import React from 'react'
import "./userOverview.css"


function userOverview() {
  return (
    <div className='UserOverview-container'>
      <div className='userO-headerimg'>
        <div className='userO-bannerimg'></div>
        <div className='userO-profpic-container'>
          <div className='userO-profpic'></div>
          <p> username/anonymous</p>
        </div>
      </div> 
      <div className='userO-info'>
      </div>
      <div className='userO-create'>
      <button
                className="user-banner"
                onClick={() => alert("Change banner")}
              >
                Change banner
        </button>
        <button
                className="user-avatar"
                onClick={() => alert("Change avatar")}
              >
                Change avatar
              </button>
      </div>

    </div>

  )
}

export default userOverview