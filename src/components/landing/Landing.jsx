import React from 'react'

import About from './About'
import InProgress from './InProgress'
import Intro from './Intro'
import Projects from './Projects'

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

export default Landing
