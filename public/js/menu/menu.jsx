'use strict';

import React from 'react';

import NavBarComponent from '../nav/navBar.jsx'

import { Container, Row, Col, Button } from 'reactstrap'

import Card from '../card/card.jsx'

import { connect } from 'react-redux'

class Home extends React.Component {

  constructor(props) {
    super(props);

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
                <Col xs={9}>Add a new Menu</Col>
                <Col xs={3}>
                  <i class="material-icons">add</i>
                </Col>
              </Row>
              <Card cardTitle={'New Menu1'} />
              <br />
              <Card cardTitle={'New Menu2'} />

              <Row>
                <br/>
                <Col xs={12}>
                  <Button>Add Menu</Button>
                </Col>
              </Row>
            </Col>

            {/* Create Item section */}
            <Col xs={4}>
              <Row>
                <Col xs={9}>Add a new Item</Col>
                <Col xs={3}>
                  <i class="material-icons">add</i>
                </Col>
              </Row>
              <Card cardTitle={'New Item1'} />
              <br />
              <Card cardTitle={'New Item2'} />
              <Row>
                <br/>
                <Col xs={12}>
                  <Button>Add Item</Button>
                </Col>
              </Row>
            </Col>


            {/* Adding additional info section */}
            <Col xs={4}>3</Col>
          </Row>
        </Container>
      </>
    );

  }
}


export default connect()(Home);