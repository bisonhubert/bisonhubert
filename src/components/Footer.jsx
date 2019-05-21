import React from 'react';

import Logo from './Logo'

function Footer() {
  return (
    <footer>
      <article>
        <nav>
          <article>
            <a href="https://www.linkedin.com/in/bisonhubert/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </article>
          <article>
            <a href="https://github.com/bisonhubert" target="_blank" rel="noopener noreferrer">Github</a>
          </article>
          <article>
            <a href="https://twitter.com/_bison__" target="_blank" rel="noopener noreferrer">Twitter</a>
          </article>
        </nav>
      </article>
      <article>
        <Logo />
        <p>
          <span>Bison Hubert, 2019</span>
          <span>|</span>
          <span>View on <a href="https://github.com/bisonhubert/bisonhubert" target="_blank" rel="noopener noreferrer">Github</a></span>
        </p>
      </article>
    </footer>
  )
}

export default Footer;
