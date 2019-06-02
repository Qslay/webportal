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
        <NavBarComponent />
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <h3>Menu</h3>
            </Col>
          </Row>
          <Row>
            {/* Create Category Section */}
            <Col xs={4}>
              <Row>
                <Col xs={9}>Menu</Col>
                <Col xs={3}>
                  <i class="material-icons">add</i>
                </Col>
              </Row>
              <Card cardTitle={'New Menu1'} />
              <br />
              <Card cardTitle={'New Menu2'} />

              <Row>
                <br />
                <Col xs={12}>
                  <Button onClick={() => (this.toggle(), this.setHead('Menu'))}>Add Menu</Button>
                </Col>
              </Row>
            </Col>

            {/* Create Item section */}
            <Col xs={4}>
              <Row>
                <Col xs={9}>Category</Col>
                <Col xs={3}>
                  <i class="material-icons">add</i>
                </Col>
              </Row>
              <Card cardTitle={'New Item1'} />
              <br />
              <Card cardTitle={'New Item2'} />
              <Row>
                <br />
                <Col xs={12}>
                  <Button onClick={() => (this.toggle(), this.setHead('Category'))}>Add Item</Button>
                </Col>
              </Row>
            </Col>


            {/* Adding additional info section */}
            <Col xs={4}>3</Col>
          </Row>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>New {this.state.modalHeader}</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="Menu" sm={3}>Add Menu</Label>
                  <Col sm={10}>
                    <Input type="text" name="Menu" id="Menu" ></Input>
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Create {this.state.modalHeader}</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>

        </Container>
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