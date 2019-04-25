'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Button, FormControl, Container, Row, Col, FormGroup, FormLabel } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux'
import { AllFetch, signup } from '../actions/actionSet1.js'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: {},
      name: {},
      username: {},
      password: {},
      _csrf: ''
    };

    this.handleSignin = this.handleSignin.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  componentDidMount() {
    const root = document.querySelector('#csrf');
    const token = root.getAttribute('data-content');
    console.log(token);
    this.setState({
      _csrf: token
    })
  }

  componentDidUpdate() {
    if (this.state.signupFeedback) {
      return <Redirect to={signupFeedback.data} />
    }
  }

  handleSignin(e) {
    e.preventDefault();
    let userSignup = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      _csrf: this.state._csrf
    }
    this.props.signup(userSignup);
  }

  setName(e) {
    this.setState({
      name: e.target.value
    })
  }

  setEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  setUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  setPassword(e) {
    this.setState({
      password: e.target.value
    })
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
                  <FormGroup controlId="text" bsSize="small">
                    <FormLabel>Name</FormLabel>
                    <FormControl
                      onChange={this.setName}
                    />
                  </FormGroup>
                  <FormGroup controlId="email" bsSize="small">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      onChange={this.setEmail}
                    />
                  </FormGroup><FormGroup controlId="text" bsSize="small">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                      onChange={this.setUsername}
                    />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="small">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      onChange={this.setPassword}
                    />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="small">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl />
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
  item: PropTypes.object,
  signupFeedback: PropTypes.object
}

const mapStateToProps = state => ({
  item: state.actionSet1.item,
  signupFeedback: state.actionSet1.signupFeedback
})

export default connect(mapStateToProps, { AllFetch, signup })(Home);