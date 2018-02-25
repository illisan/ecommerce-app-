import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Shop from './Shop/Shop'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import axios from 'axios'

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

  componentDidMount() {

    axios.get(`http://localhost:8080/getcart`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          cart: response.data.cart
        })
      })
  }



  componentDidUpdate() {
    axios.post('http://localhost:8080/postcart', {
      cart: this.state.cart
    })
      .then((response) => {
        if (response.data.success) {
          console.log('Cart Items Saved')
        }
      })
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
      cartQty: this.state.cartQty + 1
    });
  }



  render() {
    console.log(this.state.cartQty)
    return (
      <div className="App">
        <Nav
          cartQty={this.state.cartQty}
        />
        <Switch>
          <Route exact path='/' render={() => {
            return <Home
              takeInUser={this.takeInUser}
              username={this.state.username} />
          }
          } />
          <Route path='/about' render={() => {
            return <About />
          }
          } />
          <Route path='/shop' render={() => {
            return <Shop
              cart={this.state.cart}
              addItemToCart={this.addItemToCart}
              username={this.state.username}
            />
          }
          } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
