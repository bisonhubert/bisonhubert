import React, { Component } from 'react';

import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

import Landing from './components/landing/Landing.jsx'

import './App.css';
import './utilities.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
