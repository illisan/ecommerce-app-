import React, { Component } from 'react';


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


    //before that map oout cart array!!
    render() {
        let cartArr = this.props.cart
        let cartJSX = cartArr.map((item, i) => {
            return <div key={i}>
                <li class="collection-item avatar">
                    <img src={item.picture} alt="" class="circle" />
                    <span class="title">{item.name} </span>
                    <p class="secondary-content"><i class="material-icons">attach_money</i>{item.price}</p>    
                </li>
            </div>
        })
        return (
            <div>
                <header>
                    <h3>Your Cart Items</h3>
                </header>

                <ul class="collection">
                    {cartJSX}
                </ul>
            </div>
        )
    }
}



export default Cart;