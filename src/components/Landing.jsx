import React from 'react';

import ProfileIcon from './ProfileIcon';
import NavTile from './NavTile';

function Landing() {
  return (
    <div className="landing h--100p w--100p">
      <article className="h--100p w--100p">
        <NavTile id='nav__tile--red' />
        <NavTile id='nav__tile--yellow' />
        <NavTile id='nav__tile--green' />
        <NavTile id='nav__tile--blue' />
      </article>
      <ProfileIcon />
    </div>
  )
}

export default Landing
