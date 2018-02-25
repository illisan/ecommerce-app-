import React, { Component } from 'react';
import './Nav.css';
import { Link, } from "react-router-dom"

class Nav extends Component {
    render() {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li className=""><Link to="/shop/scarves">Scarves</Link></li>
                    <li><Link to="/shop/coats">Coats</Link></li>
                </ul>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper  grey  grey darken-4">
                            <a href="/" className="brand-logo center"><img src="/imgs/logo.png" className="navLogo" alt="" /></a>
                            <ul id = "nav-mobile" className="left">
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="#" className="dropdown-button" data-activates="dropdown1"><i className="material-icons right">arrow_drop_down</i>Shop</Link></li>
                            </ul>
                            <a className="right cartIcon"><Link to="/shop/cart">
                            <a href=""><span className="new badge">{this.props.cartQty}</span></a>
                            <i className="material-icons">shopping_cart</i>
                            </Link></a>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}



export default Nav;