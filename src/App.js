import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Button } from 'reactstrap'
import './App.css'

import Home from './pages/Home'
import MediaQ from './pages/MediaQ'
import Flex from './pages/Flex'
import Grid from './pages/Grid'
import Background from './pages/Background'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link> | <Link to='/mediaquery'>Media Query</Link> | <Link to='/flex'>Flex</Link> | <Link to='/grid'>Grid</Link> | <Link to='/background'>Background</Link>
          </nav>
          <Route path='/' exact component={Home}/>
          <Route path='/mediaquery' exact component={MediaQ}/>
          <Route path='/flex' exact component={Flex}/>
          <Route path='/grid' exact component={Grid}/>
          <Route path='/background' exact component={Background}/>
        </div>
      </Router>
    );
  }
}

export default App;
