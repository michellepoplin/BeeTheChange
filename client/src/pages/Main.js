
import React, { Component } from "react";
import FrontNav from "../components/FrontNav";
import { Row, Col } from 'react-flexbox-grid';
import Slider from "../components/Slider/Slider";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";
import SectionC from "../components/SectionC";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
// import Container from "react-bootstrap/Container";
import Section from '../components/Section';
import { Container } from "mdbreact";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';


class Main extends Component {
  render() {
    return (
      <Wrapper>
        <FrontNav></FrontNav>
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
                <SectionC>   <Button className="registerBttn" variant="primary" size="lg" href="/login">
          Register
        </Button>
        <Button className="logInBttn" variant="secondary" size="lg" href="/login" >
          Log In
        </Button></SectionC>
              </Col>
            </Row>
          </Container>
        </Section>
        <Footer />
      </Wrapper>
    )
  };
};

export default Main;
