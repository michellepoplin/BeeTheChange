import React, { Component } from "react";
// import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from 'react-bootstrap/Navbar';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Usercard from '../components/Usercard';

class User extends Component {
    //   state = {

    //   };

    render() {
        return (
            <Wrapper>
                <Navbar bg="light">
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Navbar>

                <Container>
             <Usercard />
                </Container>
                <Footer>This is more text</Footer>
            </Wrapper>
        )
    }

}

export default User;