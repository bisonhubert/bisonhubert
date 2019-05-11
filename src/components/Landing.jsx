import React from 'react';

import NavTile from './NavTile';

function Landing() {
  return (
    <div className="Landing h--100p w--100p">
      <NavTile id='NavTile--red' />
      <NavTile id='NavTile--yellow' />
      <NavTile id='NavTile--green' />
      <NavTile id='NavTile--blue' />
    </div>
  )
}

export default Landing
