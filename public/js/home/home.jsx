'use strict';

import React from 'react';

import NavBarComponent from '../nav/navBar.jsx'

import { connect } from 'react-redux'

class Home extends React.Component {

  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <>
      <NavBarComponent/>
      </>
    );

  }
}


export default connect()(Home);