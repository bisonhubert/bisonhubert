import React from 'react';

import logo from '../assets/logo.ico'

function Logo() {
  return (
    <article className="logo">
      <a href="">
        <img src={logo} alt="Logo icon for Bison Hubert" className="w--100p" />
      </a>
    </article>
  )
}

export default Logo;
