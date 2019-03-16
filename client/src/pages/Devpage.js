import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Container from 'react-bootstrap/Container';
import Devcard from '../components/Devcard';

class Devpage extends Component {
    //   state = {

    //   };

    render() {
        return (
            <Wrapper>

                <Nav />
                <Grid fluid>
                    <Container>
                     <Row>Developer</Row>
                     <Row>
                         <Col xs={3}>
                         <Devcard>Allie</Devcard>
                         </Col>
                         <Col xs={3}>
                         <Devcard>Kristen</Devcard>
                         </Col>
                         <Col xs={3}>
                         <Devcard>Michelle</Devcard>
                         </Col>
                         <Col xs={3}>
                         <Devcard>Krista</Devcard>
                         </Col>
                     </Row>
                    </Container>
                </Grid>
                <Footer>This Will Be The Footer Routes</Footer>

            </Wrapper>
        )
    }

}

export default Devpage;