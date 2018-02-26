import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {

    render() {

        let cartArr = this.props.cart
        let cartJSX = cartArr.map((item, i) => {
            return <div key={i}>
                <li className="collection-item avatar">
                    <img src={item.picture} alt="" className="circle" />
                    <span className="itemTitle">{item.name} </span>
                    <p className="secondary-content"><i className="material-icons">attach_money</i>{item.price}</p>
                    <a class="btn-floating btn-large waves-effect waves-light red" onClick={() => { this.props.removeItem(item) }} ><i class="material-icons">clear</i></a>

                </li>
            </div>
        })


        let cartTotal =cartArr.reduce((sum,item) => {
            return sum += item.price
        } ,0)

        if (cartTotal===0) {
            cartTotal="No Items In Cart."
        }

        return (
            <div>
                <header>
                    <h3>{this.props.username}, see your cart items below.</h3>
                </header>

                <ul className="collection">
                    {cartJSX}
                    <h4>Total: ${cartTotal} CAD</h4>
                </ul>
            </div>
        )
    }
}




export default Cart;