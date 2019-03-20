import React, { Component } from "react";
import Nav from "../components/Nav";
import { Row, Col } from 'react-flexbox-grid';


import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import QnA from "../components/QnA";

import Section from '../components/Section';
// import { Container } from "mdbreact";



class Faq extends Component {
    render() {
        return (
            <Wrapper>
              <Nav />
                  <Section>
                    <Row>
                      <Col xs={12}>
                          <QnA /> 
                      </Col>
                    </Row>
                  </Section>
                
                <Footer />
            </Wrapper>
        )
    };
    };
    export default Faq;
    
