import React, { Component } from 'react';


class Coats extends Component {

    render() {
        let coatsArr = this.props.coats
        let coatsJSX = coatsArr.map((coat, i) => {
            return <div key={i}>
                <div className="card">
                    <div className="card-image">
                        <img alt="" src={coat.picture} />
                        <span className="card-title">{coat.name}</span>
                        <p>Price:${coat.price}</p>
                        <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.props.addItemToCart(coat)}} ><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p>{coat.caption}</p>
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
                    <div className="col s12 m6">
                        {coatsJSX}
                    </div>
                </div>
            </div>
        )
    }
}




export default Coats;