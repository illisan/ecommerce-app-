import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            username: props.username
        }
    }

    printInput = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(this.state.username)
    }

    render() {
        return (
            <div className="hero">
                {/* <img className="responsive-img" alt="" src="/imgs/cover.jpg"/> */}
                <h1 className="heroCopy">Shop for the season, wear for a lifetime.</h1>
                <form onSubmit={(event) => (this.props.takeInUser(event, this.state.username))}>
                    <h4 className="heroCopy">Hi {this.state.username}! Personalize your shopping experience.</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">person_outline</i>
                            <input id="first-name" type="text" name="userInput" className="validate" onChange={(event) => (this.printInput(event))} />
                            <label htmlFor="first-name">Your Name</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}



export default Home;