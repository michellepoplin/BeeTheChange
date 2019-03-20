import React from "react";
import "./frontNav.scss";
// import Auth from "../../pages/WithAuth/";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Logo from '../../../src/logo.svg';

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
        <span className='textheader'>
          {' Bee The Change '}
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Login">Login</Nav.Link>
          <Nav.Link href="#Register">Register</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>




  );
}

export default FrontNav;
