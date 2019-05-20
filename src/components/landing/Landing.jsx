import React from 'react';

import About from './About.jsx'
import InProgress from './InProgress.jsx'
import Intro from './Intro.jsx'
import Projects from './Projects.jsx'

function Landing() {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
      <InProgress />
    </div>
  )
}

export default Landing;
