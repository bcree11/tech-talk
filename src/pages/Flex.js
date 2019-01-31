import React, { Component } from 'react'
import MediaQuery from 'react-responsive';

export default class Flex extends Component {
  render(){
    return(
      <div>
        <h1>Display: Flex</h1>
        <hr/>
        <MediaQuery minDeviceWidth={700}>
          <h3>Desktop Mode, each of the 3 divs are 30vw wide</h3>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={699}>
          <h3>Mobile Mode, now each of the divs are 90vw wide</h3>
        </MediaQuery>
        <div className="flex-container">
          <div className='flex1'></div>
        </div>
        <div className="flex-container">
          <div className='flex2'></div>
          <div className='flex2'></div>
          <div className='flex2'></div>
        </div>
      </div>
    )
  }
}
