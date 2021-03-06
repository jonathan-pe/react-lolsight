import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './app/App.scss';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));
