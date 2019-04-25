'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Button, FormControl, Container, Row, Col, FormGroup, FormLabel } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux'
import { fetchProfile } from '../actions/actionSet1.js'

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      csrf: ''
    }
  }

  componentDidMount() {
    const root = document.querySelector('#csrf');
    const token = root.getAttribute('data-content');
    this.setState({
      _csrf: token
    })
    this.props.fetchProfile(token);
  }

  render() {
    let profile = this.props.profile
    console.log(profile);
    return (
      <Container>
        <p>Profile</p>
        <p>{profile.email}</p> 
      </Container>
    )
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
  fetchProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  profile: state.actionSet1.profile,
})

export default connect(mapStateToProps, { fetchProfile })(Profile);