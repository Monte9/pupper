import React, { Component } from 'react';

import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import logo from './logo.png';

import './header.css';

export default class Header extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} className="App-logo" alt="logo" role="presentation"/>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <FontAwesome
                name='search'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingTop: '10'}}
              />
            </NavItem>
            <NavItem eventKey={2} href="#">
              <FontAwesome
                name='heart-o'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingTop: '10'}}
              />
            </NavItem>
            <NavItem eventKey={3} href="#">
              <FontAwesome
                name='user'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingTop: '10' }}
              />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
