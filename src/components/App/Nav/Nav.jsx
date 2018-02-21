import React, { Component } from 'react';
import { Link, } from "react-router-dom"

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="testNav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>

            </div>
        )
    }
}




export default Nav;