import React, { Component } from 'react';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Landing from './components/landing/Landing.jsx'

import './App.css';
import './utilities.css';

class App extends Component {
  render() {
    return (
      <div className="App h--100vh w--100vw">
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
