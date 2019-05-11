import React from 'react';

function NavTile(props) {
  return (
    <div id={props.id} className="nav__tile">
      <a href="/" className="">
        <article className="tile">
        </article>
      </a>
    </div>
  )
}

export default NavTile
