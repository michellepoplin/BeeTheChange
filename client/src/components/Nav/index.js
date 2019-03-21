import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./Nav.scss";
import Logo from '../../../src/logo.svg';
import SearchForm from '../SearchForm';

function MainNav(props) {
  return (
    <Navbar className="navbarStyle">
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
      <Nav.Link href="/" className={"MainNav"}>|| Home</Nav.Link>
<<<<<<< HEAD
      <Nav.Link href="/settings" className={"MainNav"}>|| Settings</Nav.Link>
      <Nav.Link href="/developer" className={"MainNav"}>|| The Team</Nav.Link>
=======
      {/* <Nav.Link href="/settings" className={"MainNav"}>|| Settings</Nav.Link> */}
>>>>>>> f1068dba5f5a77974a2c071d9bd3a69629c134cb
      <span className={'navbarSpan'}></span>
      <SearchForm handleFormSubmit={() => { console.log('Handle Form Submit'); }} />
    </Navbar>
  );
}

export default MainNav;
