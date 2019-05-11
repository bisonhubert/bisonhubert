import React from 'react';

import NavTile from './NavTile';

function Landing() {
  return (
    <div className="landing h--100p w--100p">
      <NavTile id='nav__tile--red' />
      <NavTile id='nav__tile--yellow' />
      <NavTile id='nav__tile--green' />
      <NavTile id='nav__tile--blue' />
    </div>
  )
}

export default Landing
