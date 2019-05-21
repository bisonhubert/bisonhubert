import React from 'react';

import Logo from './Logo';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Logo />
        <article className="site-nav">
          <article className="site-nav__link">
            <a href="#projects">Projects</a>
          </article>
          { /*
            add blog when first blog post is ready
          <article className="site-nav__link">
            <a href="">Blog</a>
          </article>

            add about when page is ready
          <article className="site-nav__link">
            <a href="">About</a>
          </article>
          */ }
        </article>
      </nav>
    </header>
  )
}

export default Header;
