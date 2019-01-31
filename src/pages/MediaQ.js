import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import '../App.css'

export default class MediaQ extends Component {
  render(){
    return(
      <div>
        <h1>Media Query</h1>
        <hr/>
        <div>
          <h2 style={{borderBottom: '4px solid black', display: 'inline-block'}}>Device Test!</h2>
          <MediaQuery minDeviceWidth={769}>
            <div>
              <h3>Desktop Mode</h3>
              <img src="../img/desktop.jpg" height='300px'/>
            </div>
            <MediaQuery minDeviceWidth={1824}>
              <h5 style={{color: 'red'}}>You also have a huge screen</h5>
              <img src="../img/warcraft.gif" height='300px'/>
              <br/>
              <img src="../img/gaming.jpg" height='300px'/>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
              <h5 style={{color: 'red'}}>Your browser is sized like a tablet or mobile phone though</h5>
            </MediaQuery>
          </MediaQuery>

          <MediaQuery minDeviceWidth={481} maxDeviceWidth={768}>
            <div>
              <h3>Tablet Mode</h3>
              <img src="../img/ipad.png" height='300px'/>
            </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
            <div>
              <h3>Mobile Mode</h3>
              <img src="../img/iPhone.png" height='300px'/>
            </div>
          </MediaQuery>
          <MediaQuery orientation="portrait">
            <div>
              <h5>Your screen is sized to portrait mode</h5>
              <img src="../img/portrait.png"/>
            </div>
          </MediaQuery>
          <MediaQuery orientation="landscape">
            <div>
              <h5>Your screen is sized to landscape mode</h5>
              <img src="../img/landscape.png"/>
            </div>
          </MediaQuery>
        </div>
      </div>
    )
  }
}
