import React, { Component } from 'react';


class Scarves extends Component {
    render() {

        //console.log(this.props.scarves)
        let scarvesArr = this.props.scarves
        let scarvesJSX = scarvesArr.map((scarf, i) => {
            return <div key={i}>
                <div className="card">
                    <div className="card-image">
                        <img alt="" src={scarf.picture} />
                        <span className="card-title">{scarf.name}</span>
                        <p>Price:${scarf.price}</p>
                        <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.props.addItemToCart(scarf) }} ><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p>{scarf.caption}</p>
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
                    <div className="col s12 m6">
                        {scarvesJSX}
                    </div>
                </div>
            </div>
        )
    }
}







export default Scarves;