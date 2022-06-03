import React from 'react'
import './Profile.css'
import profile from './assets/images/user.jpg'

function Profile() {
  return (
    <div className='profile'>
        <div className="profile_pic">
            <img src={profile} alt="Profile pic" />
        </div>
        <div className="profile_info">
            <div className="profile_user_name">
              <small>through_my_quirky_lens</small>
            </div>
            <div className="profile_user_about">
              <div className="profile_user_post"><strong>40</strong> posts</div>
              <div className="profile_user_followers"><strong>283</strong> followers</div>
              <div className="profile_user_following"><strong>274</strong> following</div>
            </div>
            <div className="profile_name">
              <small>Elizabeth Olsen</small>
            </div>
            <div className="profile_bio">
              The world through my lens
            </div>
        </div>
    </div>
  )
}

export default Profile