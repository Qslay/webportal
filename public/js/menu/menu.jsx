'use restrict'

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBarComponent from '../nav/navBar.jsx';
import Card from '../card/card.jsx';

import { create_menu } from '../actions/menuActions.js';

import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,

} from 'reactstrap';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalHeader: '',
      value:''
    };

    this.toggle = this.toggle.bind(this);
    this.setHead = this.setHead.bind(this);
    this.submit =  this.submit.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  toggle(string) {
    this.setState(prevState => ({
      modal: !prevState.modal,
      modalHeader: string
    }))
  }

  handleChange(event){
    this.setState({
      value : event.target.value
    })
  }

  setHead(string) {
    this.setState({
      modalHeader: string
    })
  }

  submit(event){
    event.preventDefault();
    this.props.create_menu(this.state.value);
  }

  render() {
    return (
      <div>
        <NavBarComponent />

        <Container>
          <Row>
            <Col xs={3}>
              <Breadcrumb>
                <BreadcrumbItem active>Menu  <Button color='secondary' onClick={() => (this.toggle("Menu"))}><i class="material-icons">edit</i></Button>
                </BreadcrumbItem>
              </Breadcrumb>
              <Card cardTitle="vjhbhfgjd" />
            </Col>
            <Col xs={3}>
              <Breadcrumb>
                <BreadcrumbItem active>Category <Button color='secondary'><i class="material-icons">edit</i></Button>
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
            <Col xs={3}>
              <Breadcrumb>
                <BreadcrumbItem active>Item <Button color='secondary'><i class="material-icons">edit</i></Button>
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
            <Col xs={3}>
              <Breadcrumb>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>


        <Modal isOpen={this.state.modal} toggle={() => (this.toggle(""))} className={this.props.className}>
          <ModalHeader toggle={() => (this.toggle(""))}>{this.state.modalHeader}</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="item" sm={2}>Add {this.state.modalHeader}</Label>
                <Col sm={10}>
                  <Input type="text" name="item" value={this.state.value} onChange={this.handleChange}/>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 1 }}>
                  <Button>Submit {this.state.modalHeader}</Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={() => (this.toggle(""))}>Do Something</Button>{' '}
            <Button color="secondary" onClick={() => (this.toggle(""))}>Cancel</Button>
          </ModalFooter> */}
        </Modal>




      </div>
    )
  }

}

Home.proptypes = {
  create_menu:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  menuItem: state.menuActions.menuItem
})


export default connect(mapStateToProps, {create_menu})(Home);