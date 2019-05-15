import React, { Component } from 'react';
import Landing from './components/Landing.jsx'

class App extends Component {
  render() {
    return (
      <div className="app h--100vh w--100vw">
        <article className="landing__container">
          <Landing />
        </article>
      </div>
    );
  }
}

export default App;
