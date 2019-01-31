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
import Bootstrap from './pages/Bootstrap'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link> | <Link to='/mediaquery'>Media Query</Link> | <Link to='/flex'>Flex</Link> | <Link to='/grid'>Grid</Link>
          </nav>
          <Route path='/' exact component={Home}/>
          <Route path='/mediaquery' exact component={MediaQ}/>
          <Route path='/flex' exact component={Flex}/>
          <Route path='/grid' exact component={Grid}/>
          <Route path='/bootstrap' exact component={Bootstrap}/>
        </div>
      </Router>
    );
  }
}

export default App;
