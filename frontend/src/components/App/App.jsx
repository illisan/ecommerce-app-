import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Shop from './Shop/Shop'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    let username = JSON.parse(localStorage.getItem('username'))
    console.log(username)
    this.state = {
      username: username,
      cart: [],
      cartQty: 0,
    }
  }

  takeInUser = (event, username) => {
    event.preventDefault()

    console.log(this.state.username)
    localStorage.setItem("username", JSON.stringify(username))
    this.setState({
      username
    })
  }



  addItemToCart = (item) => {
    console.log(item)

    this.state.cart.unshift(item);
    console.log(this.state.cart)

    this.setState({
      cart: this.state.cart,
      cartQty: this.state.cartQty +1
    });
  }

  render() {

    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' render={() => {
            return <Home 
            takeInUser={this.takeInUser}
            username={this.state.username}/>
          }
          } />
          <Route path='/about' render={() => {
            return <About />
          }
          } />
          <Route path='/shop' render={() => {
            return <Shop 
            cart= {this.state.cart}
            addItemToCart={this.addItemToCart} 
            username={this.state.username}/>
          }
          } />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
