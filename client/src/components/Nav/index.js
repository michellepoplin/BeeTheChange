import React from "react";
import "./Nav.scss";
import Navbar from 'react-bootstrap/Navbar';

function Nav(props) {
    return (
      <Navbar bg="light">
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
  </Navbar>
    );
}

export default Nav;