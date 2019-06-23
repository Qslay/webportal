'use strict';

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { connect } from 'react-redux'

class NavBarComponent extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.loadProfile = this.loadProfile.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  loadProfile(string) {
    console.log(string);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/home">Qslay</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/profile"> <i class="material-icons">
                  account_circle</i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/menu"><i class="material-icons">
                  list_alt</i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"><i class="material-icons">
                  attach_money</i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"><i class="material-icons">
                  poll</i>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Help
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/logout"><span><i class="material-icons">
                      exit_to_app</i> Logout</span>
                    </NavLink>

                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );

  }
}


export default connect()(NavBarComponent);