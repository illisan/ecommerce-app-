import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Shop from './Shop/Shop'
import Nav from './Nav/Nav'

import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route exact path='/' render={() => {
            return <Home />
          }
          } />
          <Route path='/about' render={() => {
            return <About />
          }
          } />
          <Route path='/shop' render={() => {
            return <Shop />
          }
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
