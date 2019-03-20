import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Container from 'react-bootstrap/Container';
import Devcard from '../components/Devcard';
import Allie from '../assets/images/allie.jpg';
import Kristen from '../assets/images/kristen.jpg';
import Michelle from '../assets/images/michelle.png';
import Krista from '../assets/images/krista.jpg';

class Devpage extends Component {
    //   state = {

    //   };

    render() {
        return (
            <Wrapper>

                <Nav />
                <Grid fluid>
                    <Container>
                     <Row className={"devHeader"}>Developer</Row>
                     <Row>
                         <Col xs={3}>
                         <Devcard 
                         picture= {Allie} 
                         title="Allie Valder"
                         about="Allie likes cats and coffee"
                         github="https://github.com/avalder01"
                         linkedin="https://www.linkedin.com/in/allisonvalder/"
                         />
                         </Col>
                         <Col xs={3}>
                         <Devcard 
                         picture={Kristen}
                         title="Kristen Austin"
                         about="Allie likes cats and coffee"
                         github="https://github.com/knaustin"
                         linkedin="https://www.linkedin.com/in/kristen-austin-a6638a123/"
                         />
                         </Col>
                         <Col xs={3}>
                         <Devcard 
                         picture={Michelle} 
                         title="Michelle Poplin"
                         about="Allie likes cats and coffee"
                         github=""
                         linkedin=""
                         />
                         </Col>
                         <Col xs={3}>
                         <Devcard 
                         picture={Krista}
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