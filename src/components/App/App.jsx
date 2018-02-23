import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Shop from './Shop/Shop'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      cart: [],
      cartqty: 0
    }
  }

  addItemToCart = (item) => {
    console.log(item)

    this.state.cart.unshift(item);
    console.log(this.state.cart)

    this.setState({
      cart: this.state.cart
    });
  }

  render() {

    return (
      <div className="App">
        <Nav />
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
            return <Shop 
            cart= {this.state.cart}
            addItemToCart={this.addItemToCart} />
          }
          } />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
