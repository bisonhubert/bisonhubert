import React, { Component } from 'react';
import cones from '../assets/pikachu-cones.gif';
import jackhammer from '../assets/pikachu-jackhammer.gif';
import '../utilities.css';

const bkgColors = ['#EB3223', '#FFAE03', '#A0E8AF', '#01FDF6', '#CBBAED'],
      randomIdx = Math.round(Math.random() * (bkgColors.length - 1) + 1),
      randomBkgColor = bkgColors[randomIdx];

class UnderConstruction extends Component {
  render() {
    return (
      <div style={{backgroundColor: randomBkgColor}} className="h--100p w--100p">
        <div className="m--0-auto p--relative t--calc--50p-280-5 w--300px ai--center--at-724px d--flex--at-724px jc--center--at-724px t--calc--50p-97--at-724px w--auto--at-724px">
          <img src={cones} className="h--130px mt---4px" alt="Pikachu placing cones on the ground"/>
          <div className="d--ib h--194px l--3px ovf--hidden p--relative w--294px mb--50px---max-723px mt--50px---max-723px ml--7p--at-724px mr--7p--at-724px ml--10p--at-1024px mr--10p--at-1024px">
            <img src={jackhammer} className="l---3px p--relative t---3px" alt="Pikachu jackhammering" />
          </div>
          <img src={cones} className="h--130px mt---4px" alt="Pikachu placing cones on the ground" />
        </div>
      </div>
    )
  }
}

export default UnderConstruction;
