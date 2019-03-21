import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./frontNav.scss";
import Logo from '../../../src/logo.svg';
import SearchForm from '../SearchForm';

function FrontNav(props) {
  return (
    <Navbar className="navbarStyle" expand="lg">
      <Navbar.Brand className="navheader" href="#home">
        <img
          src={Logo}
          width="55"
          height="55"
          className="d-inline-block align-top"
          alt="Bee The Change Logo"
        />
        <span className="textheader">
          {' Bee The Change '}
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Login" className={"FrontNav"}>|| Login</Nav.Link>
          <Nav.Link href="#Register" className={"FrontNav"}>|| Register</Nav.Link>
        </Nav>
        <SearchForm handleFormSubmit={() => { console.log('Handle Form Submit'); }} />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FrontNav;
