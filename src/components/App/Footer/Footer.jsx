import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div >
                <footer class="page-footer grey darken-4 ">
                    <div class="container ">
                        <div class="row">
                            <div class="col l6 s12 ">
                                <h5 class="white-text">Get in touch!</h5>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            © 2014 Copyright Text
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}




export default Footer;