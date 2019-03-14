import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Usercard from '../components/Usercard';
import Usercover from "../components/Usercover";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tiers from '../components/Tiers';

class User extends Component {
    //   state = {

    //   };

    render() {
        return (
            <Wrapper>
              <Nav />
                <Container>
             <Row>
                <Col xs={2} md={3} lg={3}> 
                <Usercard />
                </Col> 
                <Col xs={6} md={5} lg={5}> 
             <Usercover />
             </Col> 
             <Col xs={2} md={3} lg={3}>
             <Tiers />
             </Col>
             </Row>
                </Container>
                <Footer>This is more text</Footer>
            </Wrapper>
        )
    }

}

export default User;