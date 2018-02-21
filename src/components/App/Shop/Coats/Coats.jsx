import React, { Component } from 'react';

class Coats extends Component {

    render() {
        // let coatsArr= this.props.coats
        // console.log(coatsArr)
        // let coatsJSX = coatsArr.map((coat) => {
        //     console.log(coatsJSX)
        //     return coatsArr.coat

        // })



        return (
            <div>
                <header>
                    <h3>Coats</h3>
                </header>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-image">
                                <img alt="" src={this.props.coat.picture} />
                                <span className="card-title">{this.props.coat.name}</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default Coats;