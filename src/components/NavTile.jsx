import React from 'react';

function NavTile(props) {
  const getNavSpans = () => {
    return props.link_text.split('').map((char, indx) => {
      const className = `char${indx + 1}`,
            key = `${props.link_text}${className}`;
      return <span className={className} key={key}>{char}</span>
    });
  }

  const NavSpans = getNavSpans();

  return (
    <div id={props.id} className="nav__tile">
      <a href="/" className="tile__link">
        <article className="tile__inner">
          <p className="tile__link__text">{NavSpans}</p>
        </article>
      </a>
    </div>
  )
}

export default NavTile
