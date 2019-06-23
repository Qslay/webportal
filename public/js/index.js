"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store'

import 'bootstrap';

import Home from './home/home.jsx';
import Profile from './profile/profile.jsx'
import Menu from './menu/menu.jsx';

const home_target = document.getElementById('home-content');
const profile_target = document.getElementById('profile-content');
const menu_target = document.getElementById('menu-content')

if (home_target) {
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    home_target
  );
}

if (profile_target) {
  ReactDOM.render(
    <Provider store={store}>
      <Profile />
    </Provider>,
    profile_target
  );
}

if (menu_target) {
  ReactDOM.render(
    <Provider store={store}>
      <Menu />
    </Provider>,
    menu_target
  )
}