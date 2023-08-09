// todobison work with a layout

import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <div>
      <header>
        <nav>
          <Link to={`about`}>About</Link>
        </nav>
      </header>
      <main>
        <article>
          <p>Bison Hubert</p>
          <p>Software Engineer + Mentor</p>
          <p>Reno, NV</p>
        </article>
      </main>
    </div>
  );
}

export default Root;
