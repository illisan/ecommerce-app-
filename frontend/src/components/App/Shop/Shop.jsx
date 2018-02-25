import React, { Component } from 'react';
import Coats from './Coats/Coats'
import Scarves from './Scarves/Scarves'
import Cart from './Cart/Cart'
import { Switch, Route} from 'react-router-dom'

class Shop extends Component { 
    constructor(props) {
        super(props)
        this.state = {

            scarves: [
                {
                    name: 'Alpaca Wool Scarf-Silver',
                    price: 60,
                    picture: '/imgs/scarves/scarf_silver.jpg',
                    type: 'scarf',
                    caption: 'Versatile, classic and elegant, our baby alpaca scarf is a winter essential.'
                },
                {
                    name: 'Alpaca Wool Scarf-Black',
                    price: 60,
                    picture: '/imgs/scarves/scarf_black.jpg',
                    type: 'scarf',
                    caption: 'Versatile, classic and elegant, our baby alpaca scarf is a winter essential.'
                },
                {
                    name: 'Alpaca Wool Scarf-Charcoal',
                    price: 60,
                    picture: '/imgs/scarves/scarf_charcoal.jpg',
                    type: 'scarf',
                    caption: 'Versatile, classic and elegant, our baby alpaca scarf is a winter essential.'
                },
                {
                    name: 'Alpaca Wool Scarf-beige',
                    price: 60,
                    picture: '/imgs/scarves/scarf_beige.jpg',
                    type: 'scarf',
                    caption: 'Versatile, classic and elegant, our baby alpaca scarf is a winter essential.'
                },

            ],
            coats: [
                {
                    name: 'Anca Alpaca Wool Coat',
                    price: 230,
                    picture: '/imgs/coats/anca.jpg',
                    type: 'coat',
                    caption: 'The Anca is stylish and versatile. Crafted from baby alpaca and merino wool, this pristine duffle coat is both cozy and classy.'
                },
                {
                    name: 'Hana Alpaca Wool Coat',
                    price: 180,
                    picture: '/imgs/coats/hana.jpg',
                    type: 'coat',
                    caption: 'The Hana is sophisticated, edgy, and geometrically flawless. This coat will keep you warm and elegant through winter. '
                },
                {
                    name: 'Nina Alpaca Wool Coat-Camel',
                    price: 200,
                    picture: '/imgs/coats/nina.jpg',
                    type: 'coat',
                    caption: 'The Nina is bold, timeless and essential.  Crafted from baby alpaca and merino wool, this coat is inspired by the classic English trench'
                },
                {
                    name: 'Nina Alpaca Wool Coat-Black',
                    price: 200,
                    picture: '/imgs/coats/nina_black.jpg',
                    type: 'coat',
                    caption: 'The Nina is bold, timeless and essential.  Crafted from baby alpaca and merino wool, this coat is inspired by the classic English trench'
                },
                {
                    name: 'Rumi Alpaca Wool Coat',
                    price: 180,
                    picture: '/imgs/coats/rumi.jpg',
                    type: 'coat',
                    caption: 'The Rumi is feminine and assertive.This coat pairs wonderfully over evening wear and can be worn all - year around.'
                },
                {
                    name: 'Sami Alpaca Wool Coat',
                    price: 200,
                    picture: '/imgs/coats/sami.jpg',
                    type: 'coat',
                    caption: 'The Sami embodies beauty in simplicity. This classic duffle coat, is feminine, delicate and will become your wardrobe staple.'
                },

            ]
        }
    }


    render() {

        return (
            <div>
                <h1> Shop Our Collection </h1>
                <hr />
                <Switch>
                    <Route path='/shop/coats' render={() => {
                        return <Coats
                            coats={this.state.coats}
                            addItemToCart={this.props.addItemToCart}
                        />
                    }}
                    />
                    <Route path='/shop/scarves' render={() => {
                        return <Scarves
                            scarves={this.state.scarves}
                            addItemToCart={this.props.addItemToCart}
                        />
                    }}
                    />
                    <Route path='/shop/cart' render={() => {
                        return <Cart
                        cart= {this.props.cart}
                        username={this.props.username}
                        />
                    }}
                    />
                </Switch>
            </div>

        )
    }
}




export default Shop;