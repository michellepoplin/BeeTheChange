import React from "react";
import "./frontNav.scss";

import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../src/logo.svg';

  function FrontNav(props) {
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
      <span className='textheader'>
      {' Bee The Change '}
      </span>
      </Navbar.Brand>
  
  </Navbar>
    );
}

export default FrontNav;

