
import React, { Component } from "react";
import FrontNav from "../components/FrontNav";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slider from "../components/Slider/Slider";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";
import SectionC from "../components/SectionC";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Login from "../components/auth/Login"
// import Container from "react-bootstrap/Container";
import Section from '../components/Section';
import { Container } from "mdbreact";


class Home extends Component {
  render() {
    return (
      <Wrapper>
        <FrontNav />
        {/* <Grid fluid> */}
        {/* <Section>
          <Row>
            <Col>
              <Login/>
            </Col>
          </Row>
        </Section> */}
        <Section>
          <Row>
            <Col xs={12}>
              <Slider />
            </Col>
          </Row>
        </Section>
        <br />
        <Section>
          <Container>
            <Row>
              <Col xs={12}>
                <SectionA />
              </Col>
            </Row>
          </Container>
        </Section>
        <br />
        <Section>
          <Row>
            <Col xs={12}>
              <SectionB />
            </Col>
          </Row>
        </Section>
        <br />
        <Section>
          <Container>
            <Row>
              <Col xs={12}>
                <SectionC />
              </Col>
            </Row>
          </Container>
        </Section>
        {/* </Grid> */}
        <Footer />
      </Wrapper>
    )
  };
}
export default Home;



