import React from "react";
import "./Nav.scss";
import Navbar from 'react-bootstrap/Navbar';

  function Nav(props) {
    return (

      <Navbar bg="light">
      <Navbar.Brand href="#home">Bee The Change</Navbar.Brand>
      <img
        src={props.children}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
  </Navbar>
    );
}

export default Nav;

