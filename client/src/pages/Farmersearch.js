import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Section from '../components/Section';
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import FarmerHeader from "../components/FarmerHeader";
import { Grid, Row, Col } from 'react-flexbox-grid';


class Farmsearch extends Component {
    //   state = {

    //   };

    render() {
        return (
            <Wrapper>

                <Nav />
                <Grid fluid>
                <Section>
                    <Row>
                      <Col xs={12}>
                             <FarmerHeader />
                      </Col>
                    </Row>
                  </Section>
                  <br />
                  <Section>
                    {/* <Container> */}
                      <Row>
                        <Col xs={12}>
                                <SearchForm
                                    handleFormSubmit={this.handleFormSubmit}
                                    handleInputChange={this.handleInputChange}
                                    breeds={this.state.breeds}
                                />
                                <SearchResults results={this.state.results} />
                        </Col>
                     </Row>
                    {/* </Container> */}
                  </Section>
                    
                </Grid>
               <Footer />
            </Wrapper>
        )
    }

}

export default Farmsearch;