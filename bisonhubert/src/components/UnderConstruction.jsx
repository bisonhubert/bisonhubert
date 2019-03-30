import React, { Component } from 'react';
import cones from '../assets/pikachu-cones.gif';
import jackhammer from '../assets/pikachu-jackhammer.gif';
import '../atomic.css';

class UnderConstruction extends Component {
  render() {
    return (
      <div className="h--100p w--100p bkg-c--">
        <div className="m--0-auto p--relative t--calc--50p-280-5 w--300px">
          <img src={cones} className="h--130px mt---4px" />
          <div className="h--194px ovf--hidden mb--50px mt--50px w--294px">
            <img src={jackhammer} className="l---3px p--relative t---3px" />
          </div>
          <img src={cones} className="h--130px mt---4px" />
        </div>
      </div>
    )
  }
}

export default UnderConstruction;
