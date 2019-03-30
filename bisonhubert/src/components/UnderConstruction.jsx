import React, { Component } from 'react';
import cones from '../assets/pikachu-cones.gif';
import jackhammer from '../assets/pikachu-jackhammer.gif';
import '../atomic.css';

const bkgColors = ['#EB3223', '#FFAE03', '#A0E8AF', '#01FDF6', '#CBBAED'],
      randomIdx = Math.round(Math.random() * (bkgColors.length - 1) + 1),
      randomBkgColor = bkgColors[randomIdx];

class UnderConstruction extends Component {
  render() {
    return (
      <div style={{backgroundColor: randomBkgColor}} className="h--100p w--100p">
        <div className="m--0-auto p--relative t--calc--50p-280-5 w--300px">
          <img src={cones} className="h--130px mt---4px" alt="Pikachu placing cones on the ground"/>
          <div className="h--194px l--3px ovf--hidden mb--50px mt--50px p--relative w--294px">
            <img src={jackhammer} className="l---3px p--relative t---3px" alt="Pikachu jackhammering" />
          </div>
          <img src={cones} className="h--130px mt---4px" alt="Pikachu placing cones on the ground" />
        </div>
      </div>
    )
  }
}

export default UnderConstruction;
