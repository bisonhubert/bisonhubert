import React from 'react';

import Logo from './Logo'

function Footer() {
  return (
    <footer>
      <article>
        <nav>
          <article>
            <a href="/">Email me</a>
          </article>
          <article>
            <a href="/">Twitter</a>
          </article>
          <article>
            <a href="/">LinkedIn</a>
          </article>
        </nav>
      </article>
      <article>
        <Logo />
        <p>
          <span>Bison Hubert, 2019</span>
          <span>|</span>
          <span>View on Github</span>
        </p>
      </article>
    </footer>
  )
}

export default Footer;
