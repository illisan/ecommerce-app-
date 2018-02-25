import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {

    //     //when clicked on add
    //     //axios will post data to express server localhost:8080/cart
    //     //
    //     //


    //     addItem = () => {
    //         axios.post('http://localhost.8080', item)
    //         this.setState ({

    //         })
    //     }


    //     componentDidUpdate () {
    //     axios.get('url', (req,res) => {

    //     })
    // }

    render() {

        let cartArr = this.props.cart
        let cartJSX = cartArr.map((item, i) => {
            return <div key={i}>
                <li className="collection-item avatar">
                    <img src={item.picture} alt="" className="circle" />
                    <span className="itemTitle">{item.name} </span>
                    <p className="secondary-content"><i className="material-icons">attach_money</i>{item.price}</p>
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
                    {cartTotal}
                </ul>
            </div>
        )
    }
}




export default Cart;