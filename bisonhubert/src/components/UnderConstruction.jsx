import React, { Component } from 'react';
import cones from '../assets/pikachu-cones.gif'
import jackhammer from '../assets/pikachu-jackhammer.gif'

class UnderConstruction extends Component {
  render() {
    return (
      <div>
        <img src={cones} />
        <img src={jackhammer} />
        <img src={cones} />
      </div>
    )
  }
}

export default UnderConstruction;
