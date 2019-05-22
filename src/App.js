import React, { Component } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'

import Landing from './components/landing/Landing'

import './App.css'
import './utilities.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Footer />
      </div>
    )
  }
}

export default App
