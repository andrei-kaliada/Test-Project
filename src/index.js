import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import 'typeface-roboto';
import App from './App';
import creatStore from './store';
import { Provider } from 'react-redux';

const store = creatStore();


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

