'use strict';

import React from 'react';
import NavBarComponent from '../nav/navBar.jsx'

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

import { connect } from 'react-redux'

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {
    return (
      <>
        <NavBarComponent />
        <Container>
          <Row>
            <Col xs='auto'>
              <img src="/images/user/sample.png" alt="" />
            </Col>
          </Row>
          <Row>

            <Col xs='auto'>
              <Form>
                <FormGroup>
                  <Label for='Email'>Email</Label>
                  <Input type='email' name='email' id='email' ></Input>
                </FormGroup>
                <FormGroup>
                  <Label for='Username'>Username</Label>
                  <Input type='text' name='Username' id='Username' disabled ></Input>
                </FormGroup>
                <FormGroup>
                  <Label for='Location'>Location</Label>
                  <Input type='text' name='Location' id='Location' ></Input>
                </FormGroup>
                <Row form>
                  <Col md={6}>

                    <FormGroup>
                      <Label for="hoursFrom">Trading hours : From</Label>
                      <Input type="text" name="hoursFrom" id="hoursFrom" placeholder="From" />
                    </FormGroup>
                  </Col> 
                  <Col md={6}>
                    <FormGroup>
                    <Label for="hoursTo">To</Label>
                      <Input type="text" name="hoursTo" id="hoursTo" placeholder="To" />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
              <Button color='success'>Update </Button>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


export default connect()(Profile);