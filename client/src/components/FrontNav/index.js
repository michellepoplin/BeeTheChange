import React from "react";
<<<<<<< HEAD
import "./frontNav.scss";
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../src/logo.svg';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

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
      
      <Nav.Link href="#home" className={"MainNav"}>|| Register</Nav.Link>
      <Nav.Link href="#features" className={"MainNav"}>|| Log In</Nav.Link>
      <span className={'navbarSpan'}></span>
    <Form inline>
      <FormControl type="text" placeholder="Find A Hive To Sponsor" className="mr-sm-2" />
      <Button variant="outline-info" className={"MainNavButt"}>Search</Button>
    </Form>
 
  
  </Navbar>
    );

=======
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
>>>>>>> f1068dba5f5a77974a2c071d9bd3a69629c134cb
}

export default FrontNav;
