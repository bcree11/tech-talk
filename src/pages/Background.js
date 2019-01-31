import React, { Component } from 'react'
import '../App.css'
import MediaQuery from 'react-responsive';

export default class Background extends Component {
  render(){
    return(
      <div>
        <h1>Background</h1>
        <hr/>
        <div style={{border: '2px solid black'}}>
          <h2>Fixed, using px of laptop(1024px)</h2>
          <div className='backgroundFixed' style={{backgroundImage: `url(${"./img/fox.jpg"})`}}>
            <div>FOXTROT</div>
          </div>
          <div className="flex-container">
            <div className='flex1'></div>
          </div>
        </div>
        <br/>
        <div style={{border: '2px solid black'}}>
          <h2>Fluid, using background-size: cover and background-position: center</h2>
          <div className='backgroundCover' style={{backgroundImage: `url(${"./img/fox.jpg"})`}}>
            <div>FOXTROT</div>
          </div>
          <div className="flex-container">
            <div className='flex1'></div>
          </div>
        </div>
        <br/>
        <div style={{border: '2px solid black'}}>
          <h2>Fluid, using background-size: cover and background-position-X: -20(to center image)</h2>
          <div className="backgroundGridContainer">
            <div className='backgroundGridCover' style={{backgroundImage: `url(${"./img/fox.jpg"})`}}>
              <div>FOXTROT</div>
            </div>
            <div className="flex-container">
              <div className='flexGrid'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
