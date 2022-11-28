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
      <div className='userO-create'></div>

    </div>

  )
}

export default userOverview