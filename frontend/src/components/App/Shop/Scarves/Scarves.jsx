import React, { Component } from 'react';
import './Scarves.css';


class Scarves extends Component {
    render() {

        //console.log(this.props.scarves)
        let scarvesArr = this.props.scarves
        let scarvesJSX = scarvesArr.map((scarf, i) => {
            return <div key={i}>
                <div className="card col m6 l6">
                    <div className="card-image">
                        <img alt="" src={scarf.picture} />
                        <span className="card-title">{scarf.name}</span>
                        <p className="itemPrice">Price: ${scarf.price} CAD</p>
                        <a className="btn-floating halfway-fab waves-effect waves-light orange darken-3" onClick={() => { this.props.addItemToCart(scarf) }} ><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p className="itemCap">{scarf.caption}</p>
                    </div>
                </div>
            </div>
        })

        return (
            <div>
                <header>
                    <h3>Scarf Collection</h3>
                </header>

                <div className="row">
                    <div className="card col m12">
                        {scarvesJSX}
                    </div>
                </div>
            </div>
        )
    }
}







export default Scarves;