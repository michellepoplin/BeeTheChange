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
                         <Devcard 
                         picture="logo.svg" 
                         title="Allie Valder"
                         about="Allie likes cats and coffee"
                         github="https://github.com/avalder01"
                         linkedin="https://www.linkedin.com/in/allisonvalder/"
                         />
                         </Col>
                         <Col xs={3}>
                         <Devcard 
                         picture="logo.svg" 
                         title="Kristen Austin"
                         about="Allie likes cats and coffee"
                         github="https://github.com/knaustin"
                         linkedin="https://www.linkedin.com/in/kristen-austin-a6638a123/"
                         />
                         </Col>
                         <Col xs={3}>
                         <Devcard 
                         picture="logo.svg" 
                         title="Michelle Poplin"
                         about="Allie likes cats and coffee"
                         github=""
                         linkedin=""
                         />
                         </Col>
                         <Col xs={3}>
                         <Devcard 
                         picture="logo.svg" 
                         title="Krista Brehm"
                         about="Allie likes cats and coffee"
                         github="https://github.com/KbrehmCoding"
                         linkedin="https://www.linkedin.com/in/kristabrehm/"
                         />
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