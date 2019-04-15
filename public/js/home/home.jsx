'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Button, FormControl, Container, Row, Col, FormGroup, FormLabel } from 'react-bootstrap';

import { connect } from 'react-redux'
import { AllFetch, signup } from '../actions/actionSet1.js'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: {} };

    this.handleSignin = this.handleSignin.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  componentDidMount() {
    this.props.AllFetch();
    console.log(this.props.item)
  }

  componentDidUpdate(prevProps, PrevState) {
    console.log(this.props.item)

    if (prevProps.item !== this.props.item) {
      this.setState({
        name: this.props.item
      })
    }
    console.log('this', this.state);

  }


  handleSignin(e) {
    e.preventDefault();
    console.log('fhdshd');
  }

  handleEmailChange() {
    console.log('fdsafa')
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.item);
  }

  render() {
    let name = this.state.name;
    return (
      <Container>
        <Row>
          <Col xs={6}>
            <Row>
              <div className="Login">
                <form onSubmit={this.handleSignin} >
                  <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      autoFocus
                      type="email"

                      onChange={this.handleEmailChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl

                    />
                  </FormGroup>
                  <Button
                    block
                    bsSize="large"
                    type="submit"
                    onSubmit={this.handleSignin}
                  >
                    Login
                  </Button>
                </form>
              </div>
            </Row>
          </Col>
          <Col xs={6}>
            <Row>
              <div className="signup">
                <form onSubmit={this.handleSignin}>
                  <FormGroup controlId="text" bsSize="large">
                    <FormLabel>Name</FormLabel>
                    <FormControl

                    />
                  </FormGroup>
                  <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl

                    />
                  </FormGroup><FormGroup controlId="text" bsSize="large">
                    <FormLabel>Username</FormLabel>
                    <FormControl

                    />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl

                    />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl

                    />
                  </FormGroup>
                  <Button
                    block
                    bsSize="large"
                    type="submit"
                    onSubmit={this.handleSignin}
                  >
                    SignUp
                  </Button>
                </form>
              </div>

            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

Home.propTypes = {
  AllFetch: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  item: PropTypes.object
}

const mapStateToProps = state => ({
  item: state.actionSet1.item
})

export default connect(mapStateToProps, { AllFetch, signup })(Home);