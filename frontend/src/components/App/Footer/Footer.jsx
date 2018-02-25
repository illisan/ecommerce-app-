import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div >
                <footer className="page-footer grey darken-4 ">
                    <div className="container ">
                        <div className="row">
                            <div className="col l6 s12 ">
                                <h5 className="white-text">Contact Us</h5>
                                <div className="socialIcons">
                                    <a href="https://www.facebook.com/etnicacollection/"><i className="fab fa-facebook-f fa-3x"></i></a>
                                    <a href="https://www.instagram.com/etnicacollection/"><i className="fab fa-instagram fa-3x"></i></a>
                                    <a href="https://twitter.com/etnica_"><i className="fab fa-twitter fa-3x"></i></a>
                                </div>
                                <a href="mailto:sandra@helloetnica.com" className="grey-text text-lighten-4" id="emailTxt">Email Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2014 Copyright Text
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}




export default Footer;