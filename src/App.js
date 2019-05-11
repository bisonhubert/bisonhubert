import React, { Component } from 'react';
import Landing from './components/Landing.jsx'

import './stylesheets/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App h--100vh w--100vw">
        <Landing />
      </div>
    );
  }
}

export default App;
