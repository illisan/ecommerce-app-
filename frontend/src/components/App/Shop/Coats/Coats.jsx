import React, { Component } from 'react';
import './Coats.css';


class Coats extends Component {

    render() {
        let coatsArr = this.props.coats
        let coatsJSX = coatsArr.map((coat, i) => {
            return <div key={i}>
                <div className="card col m6 l6">
                    <div className="card-image">
                        <img alt="" src={coat.picture} />
                        <span className="card-title">{coat.name}</span>
                        <p className="itemPrice">Price: ${coat.price} CAD</p>
                        <a className="btn-floating halfway-fab waves-effect waves-light  orange darken-3" onClick={() => { this.props.addItemToCart(coat) }} ><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p className="itemCap">{coat.caption}</p>
                    </div>
                </div>
            </div>
        })

        return (
            <div>
                <header>
                    <h3>Coat Collection</h3>
                </header>
                <div className="row">
                    <div className="card col m12">
                        {coatsJSX}
                    </div>
                </div>
            </div>
        )
    }
}




export default Coats;