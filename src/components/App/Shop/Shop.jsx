import React, { Component } from 'react';
import Coats from './Coats/Coats'
import Scarves from './Scarves/Scarves'
import { Switch, Route, Link } from 'react-router-dom'

class Shop extends Component {
    constructor (props) {
        super(props)
        this.state= {
            coats : [
                {
                    name: 'Anca Alpaca Wool Coat',
                    price: 230,
                    picture: '/imgs/coats/anca.jpg',
                    type: 'coat'
                },
                {
                    name: 'Hana Alpaca Wool Coat',
                    price: 180,
                    picture: '/imgs/coats/hana.jpg',
                    type: 'coat'
                },
                {
                    name: 'Nina Alpaca Wool Coat',
                    price: 200,
                    picture: '/imgs/coats/nina.jpg',
                    type: 'coat'
                },
                {
                    name: 'Rumi Alpaca Wool Coat',
                    price: 180,
                    picture: '/imgs/coats/rumi.jpg',
                    type: 'coat'
                },
                {
                    name: 'Sami Alpaca Wool Coat',
                    price: 200,
                    picture: '/imgs/coats/sami.jpg',
                    type: 'coat'
                }
            ]
        }
    }
    
    // mappedArr = () => {
    //     console.log("calling mapped array!");
    //     let coatsArr = this.state.coats
    //     console.log(coatsArr)
    //     let coatsJSX = coatsArr.map((coat,i) => {
    //         console.log(coatsJSX)
    //         return coatsJSX
    //         // coat = coatsJSX[i]
    //     })
    //     this.setState({
    //         tasks: coatsJSX
    //     })
    // }

    render() {
        let coatsArr= this.state.coats
        let coatsJSX = coatsArr.map((coat, i) => {
            return <Coats
                coat={coat} key={i}
                // coatsJSX={coatsJSX}
               />
        })
        return (
            <div>
                <h1> Shop Our Collection </h1>
                <Link to="/shop/scarves"><button type="button">Scarves</button></Link>
                <Link to="/shop/coats"><button type="button">Coats</button></Link>
                <Switch>
                    <Route  path='/shop/coats' render={() =>{
                    return <Coats />
                }}
                 />
                    <Route path='/shop/scarves' render={() => {
                        return <Scarves />
                    }}
                    />
                </Switch>
                {coatsJSX}
                <button onClick={this.mappedArr}>test</button>
            </div>
        )
    }
}




export default Shop;