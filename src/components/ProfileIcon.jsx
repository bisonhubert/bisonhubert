import React from 'react';

import profileImg from '../assets/profile-brava.jpg';

function ProfileIcon() {
  return (
    <div className="profile-icon">
      <img src={profileImg} className="w--100p" alt="Portrait of Bison Hubert in Redwood City, CA circa 2017" />
    </div>
  )
}

export default ProfileIcon

