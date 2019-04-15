"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store'

import 'bootstrap';

import Home from './home/home.jsx';


const home_target = document.getElementById('home-content');

if (home_target) {
    ReactDOM.render(
        <Provider store = {store}>
            <Home/>
        </Provider>,
        home_target
    );
}