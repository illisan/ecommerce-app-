import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom"

ReactDOM.render(
    <Router>
        <Route path='/'component={App} />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
