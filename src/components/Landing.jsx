import React from 'react';

import ProfileIcon from './ProfileIcon';
import NavTile from './NavTile';

function Landing() {
  return (
    <div className="landing h--100p w--100p">
      <article className="h--100p w--100p">
        <NavTile id='nav__tile--red' link_text='Projects' />
        <NavTile id='nav__tile--yellow' link_text='Blog' />
        <NavTile id='nav__tile--green' link_text='About' />
        <NavTile id='nav__tile--blue' link_text='Resume' />
      </article>
      <ProfileIcon />
    </div>
  )
}

export default Landing
