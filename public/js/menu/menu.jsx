'use strict';

import React from 'react';

import NavBarComponent from '../nav/navBar.jsx'

import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap'

import Card from '../card/card.jsx'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { create_menu } from '../actions/menuActions.js'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalHeader: '',
    };
    this.toggle = this.toggle.bind(this);
    this.setHead = this.setHead.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }
  setHead(head) {
    this.setState({
      modalHeader: head
    })
  }

  render() {
    return (
      <>
        
      </>
    );

  }
}

Home.prototype = {
  create_menu: PropTypes.func.isRequired,

  menuItem: PropTypes.object
}

const mapStateToProps = state => ({
  menuItem: state.menuActions.menuItem,
})

export default connect(mapStateToProps, { create_menu })(Home);